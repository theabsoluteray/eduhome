'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';

const LANGUAGE_LAB_SYSTEM_MESSAGE = `You are a language learning assistant specializing in language acquisition.
Help students practice and improve their language skills through conversation, pronunciation feedback,
grammar correction, and vocabulary building. Adjust your language complexity based on the student's proficiency level.
When appropriate, provide cultural context for language use and suggest additional practice exercises.`;

export default function LanguageClient() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [proficiencyLevel, setProficiencyLevel] = useState('intermediate');
  const [practiceMode, setPracticeMode] = useState('');
  const [showChat, setShowChat] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish (Español)' },
    { code: 'fr', name: 'French (Français)' },
    { code: 'de', name: 'German (Deutsch)' },
    { code: 'it', name: 'Italian (Italiano)' },
    { code: 'pt', name: 'Portuguese (Português)' },
    { code: 'ru', name: 'Russian (Русский)' },
    { code: 'zh', name: 'Chinese (中文)' },
    { code: 'ja', name: 'Japanese (日本語)' },
    { code: 'ko', name: 'Korean (한국어)' },
    { code: 'ar', name: 'Arabic (العربية)' },
    { code: 'hi', name: 'Hindi (हिन्दी)' },
    { code: 'bn', name: 'Bengali (বাংলা)' },
    { code: 'tr', name: 'Turkish (Türkçe)' },
    { code: 'nl', name: 'Dutch (Nederlands)' },
    { code: 'sv', name: 'Swedish (Svenska)' },
    { code: 'pl', name: 'Polish (Polski)' },
    { code: 'uk', name: 'Ukrainian (Українська)' },
    { code: 'el', name: 'Greek (Ελληνικά)' },
    { code: 'he', name: 'Hebrew (עברית)' }
  ];
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };
  
  const handleProficiencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProficiencyLevel(e.target.value);
  };
  
  const handlePracticeModeSelect = (mode: string) => {
    setPracticeMode(mode);
  };
  
  const handleStartPractice = () => {
    if (selectedLanguage && proficiencyLevel && practiceMode) {
      setShowChat(true);
    } else {
      alert('Please select a language, proficiency level, and practice mode to continue.');
    }
  };
  
  return (
    <div className="p-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 mb-6 rounded-lg">
        <h2 className="font-medium text-gray-800 dark:text-white mb-2">Features:</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Practice conversations with advanced AI in any language</li>
          <li>Receive pronunciation feedback through audio analysis</li>
          <li>Get real-time grammar and vocabulary corrections</li>
          <li>Learn discipline-specific terminology for academic success</li>
        </ul>
      </div>
      
      {showChat ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[500px] mb-6 transition-colors duration-200">
          <ChatInterface 
            initialSystemMessage={`${LANGUAGE_LAB_SYSTEM_MESSAGE} Target language: ${selectedLanguage}. Proficiency level: ${proficiencyLevel}. Practice mode: ${practiceMode}.`}
            specialization="language"
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Choose Your Language</h3>
              <select 
                className="input-field w-full transition-colors duration-200" 
                value={selectedLanguage}
                onChange={handleLanguageChange}
                aria-label="Select language"
              >
                <option value="">-- Select a language --</option>
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              {!selectedLanguage && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Please select the language you want to practice
                </p>
              )}
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Select Proficiency Level</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="beginner" 
                    name="proficiency" 
                    value="beginner"
                    className="mr-2 accent-primary-500 dark:accent-primary-400" 
                    checked={proficiencyLevel === 'beginner'}
                    onChange={handleProficiencyChange}
                  />
                  <label htmlFor="beginner" className="dark:text-gray-300">Beginner (A1-A2)</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="intermediate" 
                    name="proficiency" 
                    value="intermediate"
                    className="mr-2 accent-primary-500 dark:accent-primary-400" 
                    checked={proficiencyLevel === 'intermediate'}
                    onChange={handleProficiencyChange}
                  />
                  <label htmlFor="intermediate" className="dark:text-gray-300">Intermediate (B1-B2)</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="advanced" 
                    name="proficiency" 
                    value="advanced"
                    className="mr-2 accent-primary-500 dark:accent-primary-400" 
                    checked={proficiencyLevel === 'advanced'}
                    onChange={handleProficiencyChange}
                  />
                  <label htmlFor="advanced" className="dark:text-gray-300">Advanced (C1-C2)</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="native" 
                    name="proficiency" 
                    value="native"
                    className="mr-2 accent-primary-500 dark:accent-primary-400" 
                    checked={proficiencyLevel === 'native'}
                    onChange={handleProficiencyChange}
                  />
                  <label htmlFor="native" className="dark:text-gray-300">Native/Bilingual</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-6 transition-colors duration-200">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-lg dark:text-white">Choose Practice Mode</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {[
                { id: 'conversation', title: 'Free Conversation', desc: 'Practice natural conversations on any topic with real-time feedback.' },
                { id: 'guided', title: 'Guided Exercises', desc: 'Follow structured exercises focusing on specific grammar or vocabulary.' },
                { id: 'academic', title: 'Academic Language', desc: 'Learn subject-specific terminology and academic expression.' }
              ].map(mode => (
                <div 
                  key={mode.id}
                  className={`border rounded-lg p-4 transition-all duration-200 cursor-pointer ${
                    practiceMode === mode.id 
                      ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30 shadow-md' 
                      : 'border-gray-200 dark:border-gray-700 hover:shadow-md dark:hover:shadow-gray-800'
                  }`}
                  onClick={() => handlePracticeModeSelect(mode.id)}
                >
                  <h4 className="font-medium mb-2 dark:text-white">{mode.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-200">
            <p className="text-gray-500 dark:text-gray-400">Ready to start practicing your language skills?</p>
            <p className="text-gray-700 dark:text-gray-300 font-medium mt-2">
              {selectedLanguage && proficiencyLevel && practiceMode 
                ? `You've selected ${languages.find(l => l.code === selectedLanguage)?.name} at ${proficiencyLevel} level with ${practiceMode} mode.` 
                : 'Please select a language, proficiency level, and practice mode to continue.'}
            </p>
            <button 
              className={`btn btn-secondary mt-4 ${!selectedLanguage || !proficiencyLevel || !practiceMode ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleStartPractice}
              disabled={!selectedLanguage || !proficiencyLevel || !practiceMode}
            >
              Start Language Practice
            </button>
          </div>
        </>
      )}
    </div>
  );
} 