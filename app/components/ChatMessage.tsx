'use client';

import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  imageUrl?: string;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, isUser, imageUrl }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`max-w-[80%] px-4 py-3 rounded-lg transition-colors duration-200 ${
          isUser 
            ? 'bg-primary-600 dark:bg-primary-700 text-white rounded-br-none' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
        }`}
      >
        {imageUrl && (
          <div className="mb-2">
            <img 
              src={imageUrl} 
              alt="Uploaded image" 
              className="max-w-full max-h-60 rounded-md object-contain"
            />
          </div>
        )}
        
        {isUser ? (
          <p className="text-sm">{message}</p>
        ) : (
          <ReactMarkdown className="text-sm prose prose-sm max-w-none dark:prose-invert">
            {message}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatMessage; 