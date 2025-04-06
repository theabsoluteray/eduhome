'use client';

import { useState, useRef, FC, ChangeEvent, FormEvent } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaPaperPlane, FaMicrophone, FaImage, FaStop, FaTimes } from 'react-icons/fa';

interface MultimodalInputProps {
  onSendMessage: (text: string, media?: File | null) => void;
  onSendAudio: (audio: Blob) => void;
  isProcessing: boolean;
}

const MultimodalInput: FC<MultimodalInputProps> = ({ 
  onSendMessage, 
  onSendAudio, 
  isProcessing 
}) => {
  const [message, setMessage] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
        // Add a helpful suggestion to the message if it's empty
        if (!message.trim()) {
          setMessage("Could you help me solve this homework problem?");
        }
      }
    },
  });

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
        audioChunksRef.current.push(event.data);
      });
      
      mediaRecorderRef.current.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        audioChunksRef.current = [];
        onSendAudio(audioBlob);
      });
      
      audioChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() || selectedFile) {
      onSendMessage(message, selectedFile);
      setMessage('');
      setSelectedFile(null);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 transition-colors duration-200">
      {selectedFile && (
        <div className="mb-4 relative">
          <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center">
            <div className="relative w-16 h-16 rounded overflow-hidden border border-gray-300 dark:border-gray-600 mr-3">
              <img 
                src={URL.createObjectURL(selectedFile)} 
                alt="Selected file" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                {selectedFile.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {(selectedFile.size / 1024).toFixed(0)} KB
              </p>
            </div>
            <button 
              onClick={() => setSelectedFile(null)}
              className="ml-2 p-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
              aria-label="Remove image"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <div className="relative">
          <button 
            type="button"
            {...getRootProps()}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors duration-200"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Upload image"
          >
            <FaImage className="h-5 w-5" />
            <input {...getInputProps()} />
          </button>
          
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-xs bg-gray-800 text-white rounded shadow-lg whitespace-nowrap">
              Upload homework image
            </div>
          )}
        </div>
        
        <button 
          type="button"
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          className={`p-2 rounded-full focus:outline-none transition-colors duration-200 ${
            isRecording ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
          disabled={isProcessing}
        >
          {isRecording ? (
            <FaStop className="h-5 w-5" />
          ) : (
            <FaMicrophone className="h-5 w-5" />
          )}
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          placeholder={selectedFile ? "Describe your homework problem..." : "Type your message..."}
          className="input-field flex-grow"
          disabled={isProcessing || isRecording}
        />
        
        <button
          type="submit"
          className="p-2 rounded-full bg-primary-600 dark:bg-primary-700 text-white hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none transition-colors duration-200"
          disabled={isProcessing || isRecording || (!message.trim() && !selectedFile)}
        >
          <FaPaperPlane className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default MultimodalInput; 