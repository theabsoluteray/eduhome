'use client';

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import MultimodalInput from './MultimodalInput';
import { usePreferences } from '../context/PreferencesContext';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
  imageUrl?: string;
}

interface ChatInterfaceProps {
  initialSystemMessage?: string;
  placeholder?: string;
  specialization?: 'homework' | 'language' | 'concepts' | 'research' | 'study';
  initialPrompt?: string;
}

const ChatInterface = ({ 
  initialSystemMessage = 'You are a helpful, educational AI assistant. Provide clear and concise explanations.',
  placeholder = 'Ask anything...',
  specialization = 'homework',
  initialPrompt = ''
}: ChatInterfaceProps) => {
  const { preferences } = usePreferences();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: initialSystemMessage }
  ]);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Add initial assistant message based on specialization and handle initialPrompt
  useEffect(() => {
    let welcomeMessage = '';
    
    switch(specialization) {
      case 'homework':
        welcomeMessage = 'Hello! I\'m your homework assistant. Send me your homework question, and I\'ll help guide you through it step by step.';
        break;
      case 'language':
        welcomeMessage = 'Welcome to the Language Lab! I can help you practice conversations, correct your grammar, or explain language concepts in your preferred language.';
        break;
      case 'concepts':
        welcomeMessage = 'Hi there! I can help clarify complex concepts for you. What topic would you like me to explain?';
        break;
      case 'research':
        welcomeMessage = 'Welcome to the Research Guide! I can help you find reliable sources, evaluate information quality, and synthesize findings across multiple references.';
        break;
      case 'study':
        welcomeMessage = 'Hello! I\'m your study assistant. I can help create personalized study plans, generate practice questions, or explain difficult topics. How can I help today?';
        break;
      default:
        welcomeMessage = 'Hello! How can I assist you with your learning today?';
    }
    
    // Add initial assistant message
    const initialAssistantMessage = { role: 'assistant' as const, content: welcomeMessage };
    
    if (initialPrompt) {
      // If there's an initial prompt, we'll add it after the welcome message
      setMessages(prevMessages => [...prevMessages, initialAssistantMessage]);
      setVisibleMessages([initialAssistantMessage]);
      
      // Use a slight delay to simulate a user typing the initial prompt
      const timer = setTimeout(() => {
        handleSendMessage(initialPrompt);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // No initial prompt, just show the welcome message
      setMessages(prevMessages => [...prevMessages, initialAssistantMessage]);
      setVisibleMessages([initialAssistantMessage]);
    }
  }, [specialization, initialPrompt]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  // Clean up object URLs when the component unmounts
  useEffect(() => {
    return () => {
      // Cleanup any created object URLs to prevent memory leaks
      visibleMessages.forEach(message => {
        if (message.imageUrl) {
          URL.revokeObjectURL(message.imageUrl);
        }
      });
    };
  }, [visibleMessages]);

  const handleSendMessage = async (text: string, media?: File | null) => {
    if (!text.trim() && !media) return;
    
    // Add user message to chat
    const userMessage: Message = { 
      role: 'user', 
      content: text,
      imageUrl: media && media.type.startsWith('image/') ? URL.createObjectURL(media) : undefined
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setVisibleMessages(prevMessages => [...prevMessages, userMessage]);
    setIsProcessing(true);
    
    try {
      let messageContent = text;
      
      // Process media file
      if (media) {
        if (media.type.startsWith('image/')) {
          // For images, convert to base64 and add to message content
          const base64Image = await fileToBase64(media);
          // Add a meaningful prefix to help the AI understand this is an image
          messageContent = messageContent || "Please help me with this homework problem:";
          messageContent += "\n\nI've attached an image of my homework assignment. The image shows:\n";
          
          // Add image description hints based on file name and type to help the AI
          const fileNameHint = media.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
          messageContent += `- It appears to be ${fileNameHint || "a homework problem"}\n`;
          messageContent += `- Please analyze this image and explain how to solve this problem.\n`;
          messageContent += `- If you see any text or equations in the image, please include them in your response.\n`;
          messageContent += `- Guide me through the solution step by step.\n\n`;
          
          // Note: In a production environment, we would send the actual base64 image to the AI
          // or use a multimodal API that can process images directly
          messageContent += "[Image data included but not visible in this interface]";
        } else {
          // For other media
          messageContent += "\n[Media file attached]";
        }
      }
      
      // Call the Groq API through our backend
      const response = await axios.post('/api/groq', {
        messages: [...messages, { role: 'user', content: messageContent }],
        language: preferences.language,
        model: 'llama-3.3-70b-versatile' // Using the verified Groq model
      });
      
      // Add assistant response to chat
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.data.choices[0].message.content 
      };
      
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
      setVisibleMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error: any) {
      console.error('Error calling API:', error);
      
      // Add error message to chat
      const errorMessage: Message = { 
        role: 'assistant', 
        content: `I'm sorry, I encountered an error: ${error.response?.data?.error || error.message || 'Unknown error'}. Please try again later.` 
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
      setVisibleMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  // Helper function to convert a file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleSendAudio = async (audioBlob: Blob) => {
    try {
      setIsProcessing(true);
      
      // Call the Groq API through our backend (simulated for this example)
      // In a real implementation, you would send the actual transcribed text
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // You would make an API call like:
      // const response = await axios.post('/api/groq', {
      //   messages: [...messages, { role: 'user', content: 'Transcribed text from audio' }],
      //   language: preferences.language,
      //   model: 'llama-3.3-70b-versatile'
      // });
      
      // Add a mock user message
      const mockUserMessage: Message = { 
        role: 'user', 
        content: '[Audio input transcription would appear here]' 
      };
      
      setMessages(prevMessages => [...prevMessages, mockUserMessage]);
      setVisibleMessages(prevMessages => [...prevMessages, mockUserMessage]);
      
      // Add a mock assistant response
      const mockAssistantMessage: Message = { 
        role: 'assistant', 
        content: 'I received your audio message. In a real implementation, I would transcribe it and respond to your question.' 
      };
      
      setMessages(prevMessages => [...prevMessages, mockAssistantMessage]);
      setVisibleMessages(prevMessages => [...prevMessages, mockAssistantMessage]);
    } catch (error) {
      console.error('Error processing audio:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 transition-colors duration-200">
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {visibleMessages.map((message, index) => (
          message.role !== 'system' && (
            <ChatMessage
              key={index}
              message={message.content}
              isUser={message.role === 'user'}
              imageUrl={message.imageUrl}
            />
          )
        ))}
        
        {isProcessing && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-lg rounded-bl-none px-4 py-2 max-w-[80%] transition-colors duration-200">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <MultimodalInput
        onSendMessage={handleSendMessage}
        onSendAudio={handleSendAudio}
        isProcessing={isProcessing}
      />
    </div>
  );
};

export default ChatInterface; 