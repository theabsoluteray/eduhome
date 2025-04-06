'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import { FaSearch } from 'react-icons/fa';

const CONCEPT_SYSTEM_MESSAGE = `You are a concept clarification assistant specializing in explaining complex topics.
Your goal is to help students understand difficult concepts through clear explanations tailored to their learning style.
Use analogies, examples, and visual descriptions when appropriate. Break down complex ideas into manageable parts.
If a concept is still unclear, try alternative explanations using different approaches until the student understands.`;

export default function ConceptClient() {
  const [subject, setSubject] = useState('');
  const [learningStyle, setLearningStyle] = useState('visual');
  const [difficultyLevel, setDifficultyLevel] = useState('intermediate');
  const [showChat, setShowChat] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const subjects = [
    { id: 'math', name: 'Mathematics', topics: ['Calculus', 'Algebra', 'Statistics', 'Geometry', 'Number Theory'] },
    { id: 'science', name: 'Science', topics: ['Physics', 'Chemistry', 'Biology', 'Astronomy', 'Earth Science'] },
    { id: 'compsci', name: 'Computer Science', topics: ['Algorithms', 'Data Structures', 'Programming', 'Machine Learning', 'Databases'] },
    { id: 'humanities', name: 'Humanities', topics: ['Philosophy', 'Literature', 'History', 'Art', 'Music Theory'] },
    { id: 'economics', name: 'Economics', topics: ['Microeconomics', 'Macroeconomics', 'Game Theory', 'Finance', 'International Trade'] },
  ];
  
  const handleStartChat = () => {
    setShowChat(true);
  };
  
  const filteredSubjects = searchTerm 
    ? subjects.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : subjects;

  return (
    <div className="p-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 mb-6 rounded-lg transition-colors duration-200">
        <h2 className="font-medium text-gray-800 dark:text-white mb-2">How to use this tool:</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Select your subject area and specific concept you need help with</li>
          <li>Choose your preferred learning style and difficulty level</li>
          <li>The AI will explain the concept clearly with examples tailored to your preferences</li>
          <li>Ask follow-up questions if something remains unclear</li>
        </ol>
      </div>
      
      {showChat ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[500px] mb-4 transition-colors duration-200">
          <ChatInterface 
            initialSystemMessage={`${CONCEPT_SYSTEM_MESSAGE} Use ${learningStyle} learning examples and explain at a ${difficultyLevel} level.`}
            specialization="concepts"
          />
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search subjects or topics..."
                className="input-field flex-grow pl-10 transition-colors duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subj) => (
                  <div 
                    key={subj.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      subject === subj.id 
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setSubject(subj.id)}
                  >
                    <h3 className="font-medium text-lg mb-2 dark:text-white">{subj.name}</h3>
                    <div className="flex flex-wrap gap-1">
                      {subj.topics.map((topic) => (
                        <span 
                          key={topic} 
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300 transition-colors duration-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 p-8 text-center text-gray-500 dark:text-gray-400">
                  No subjects or topics found matching "{searchTerm}". Try a different search term.
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Select Learning Style</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'visual', label: 'Visual Learning', desc: 'Diagrams & imagery' },
                  { id: 'auditory', label: 'Auditory Learning', desc: 'Verbal explanations' },
                  { id: 'reading', label: 'Reading/Writing', desc: 'Text-based learning' },
                  { id: 'kinesthetic', label: 'Kinesthetic', desc: 'Practical examples' }
                ].map(style => (
                  <div 
                    key={style.id}
                    className={`p-3 border rounded-md cursor-pointer transition-all duration-200 ${
                      learningStyle === style.id 
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setLearningStyle(style.id)}
                  >
                    <div className="font-medium dark:text-white">{style.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{style.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Select Difficulty Level</h3>
              <div className="space-y-2">
                {[
                  { id: 'beginner', label: 'Beginner', desc: 'Simple explanations with basic concepts' },
                  { id: 'intermediate', label: 'Intermediate', desc: 'More detailed with some technical terms' },
                  { id: 'advanced', label: 'Advanced', desc: 'In-depth explanations with technical language' },
                  { id: 'expert', label: 'Expert', desc: 'Highly technical with specialized terminology' }
                ].map(level => (
                  <div 
                    key={level.id}
                    className={`p-3 border rounded-md cursor-pointer transition-all duration-200 ${
                      difficultyLevel === level.id 
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setDifficultyLevel(level.id)}
                  >
                    <div className="font-medium dark:text-white">{level.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{level.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-200">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {subject 
                ? `You've selected ${subjects.find(s => s.id === subject)?.name} with ${learningStyle} learning style at ${difficultyLevel} level.` 
                : 'Please select a subject to continue.'}
            </p>
            <button 
              className={`btn btn-primary mt-4 ${!subject ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleStartChat}
              disabled={!subject}
            >
              Get Concept Clarification
            </button>
          </div>
        </>
      )}
    </div>
  );
} 