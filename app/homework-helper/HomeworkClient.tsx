'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';

const HOMEWORK_SYSTEM_MESSAGE = `You are a helpful educational assistant specializing in homework help. 
Your goal is to guide students through their assignments without simply giving them the answers.
Provide explanations, ask guiding questions, and offer step-by-step assistance that promotes learning.
Adapt your language to the student's proficiency level and respond in their preferred language.`;

export default function HomeworkClient() {
  const [language, setLanguage] = useState('en');
  const [academicLevel, setAcademicLevel] = useState('high');
  const [showChat, setShowChat] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleAcademicLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAcademicLevel(e.target.value);
  };

  const handleStartDemo = () => {
    setShowChat(true);
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 mb-6 rounded-lg">
        <h2 className="font-medium text-gray-800 dark:text-white mb-2">How to use this tool:</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Select your preferred language and academic level</li>
          <li>Click "Start Homework Helper" to begin</li>
          <li>Type your homework question or upload an image of your assignment using the image button</li>
          <li>Ask follow-up questions if you need more clarification</li>
        </ol>
      </div>

      {showChat ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[500px] mb-4 transition-colors duration-200">
          <ChatInterface 
            initialSystemMessage={`${HOMEWORK_SYSTEM_MESSAGE} Please respond in ${language}. Adapt content for ${academicLevel} academic level.`}
            specialization="homework"
          />
        </div>
      ) : (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-64 overflow-y-auto p-4 mb-4 transition-colors duration-200">
          <div className="flex flex-col justify-center items-center h-full text-center">
            <div className="mb-4">
              <p className="text-2xl text-primary-600 dark:text-primary-400 mb-2">Homework Helper</p>
              <p className="text-gray-700 dark:text-gray-300">
                Get step-by-step guidance on your assignments without giving away the answers
              </p>
            </div>
            <div className="text-gray-500 dark:text-gray-400 mb-6">
              Select your preferences below and click "Start" to begin
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex mb-4">
          <select 
            className="input-field mr-2 max-w-xs" 
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
            <option value="ru">Russian</option>
          </select>
          <select 
            className="input-field max-w-xs" 
            value={academicLevel}
            onChange={handleAcademicLevelChange}
          >
            <option value="elementary">Elementary School</option>
            <option value="middle">Middle School</option>
            <option value="high">High School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>

        {!showChat && (
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600">
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
              Click below to start the interactive AI homework helper.
              You'll be able to share homework questions as text or images.
            </p>
            <button 
              className="btn btn-primary hover:bg-primary-700 dark:hover:bg-primary-400 transition-colors duration-200"
              onClick={handleStartDemo}
            >
              Start Homework Helper
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 