'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';

const RESEARCH_SYSTEM_MESSAGE = `You are a research guide assistant specializing in helping students find and evaluate sources.
Your goal is to help students develop effective research strategies, evaluate source credibility, and synthesize information.
Provide guidance on how to find reliable sources, assess information quality, and combine findings from multiple references.
Help students understand research methodologies and citation formats appropriate to their academic field.`;

export default function ResearchClient() {
  const [researchType, setResearchType] = useState('');
  const [academicField, setAcademicField] = useState('');
  const [researchPhase, setResearchPhase] = useState('');
  const [showChat, setShowChat] = useState(false);
  
  const researchTypes = [
    { id: 'academic', name: 'Academic Research', icon: '📚' },
    { id: 'literature', name: 'Literature Review', icon: '📖' },
    { id: 'thesis', name: 'Thesis/Dissertation', icon: '🎓' },
    { id: 'project', name: 'Research Project', icon: '📊' },
    { id: 'case', name: 'Case Study', icon: '🔍' },
    { id: 'survey', name: 'Survey Research', icon: '📋' },
    { id: 'experimental', name: 'Experimental Research', icon: '🧪' },
    { id: 'meta', name: 'Meta-Analysis', icon: '📈' }
  ];
  
  const academicFields = [
    { id: 'humanities', name: 'Humanities', citation: 'MLA, Chicago' },
    { id: 'social', name: 'Social Sciences', citation: 'APA, Chicago' },
    { id: 'natural', name: 'Natural Sciences', citation: 'APA, CSE' },
    { id: 'engineering', name: 'Engineering & Tech', citation: 'IEEE, APA' },
    { id: 'medicine', name: 'Medicine & Health', citation: 'AMA, Vancouver' },
    { id: 'business', name: 'Business & Economics', citation: 'APA, Harvard' }
  ];
  
  const researchPhases = [
    { id: 'topic', name: 'Topic Selection', desc: 'Help narrowing down research topics' },
    { id: 'sources', name: 'Finding Sources', desc: 'Guidance on locating reliable information' },
    { id: 'evaluation', name: 'Source Evaluation', desc: 'Assessing credibility and relevance' },
    { id: 'synthesis', name: 'Information Synthesis', desc: 'Combining findings from multiple sources' },
    { id: 'citation', name: 'Citation Help', desc: 'Assistance with proper attributions' }
  ];
  
  const handleResearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResearchType(e.target.value);
  };
  
  const handleAcademicFieldChange = (id: string) => {
    setAcademicField(id);
  };
  
  const handleResearchPhaseChange = (id: string) => {
    setResearchPhase(id);
  };
  
  const handleStartChat = () => {
    if (researchType && academicField && researchPhase) {
      setShowChat(true);
    } else {
      alert('Please complete all selections to continue.');
    }
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 mb-6 rounded-lg transition-colors duration-200">
        <h2 className="font-medium text-gray-800 dark:text-white mb-2">How to use this tool:</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Select your research type and academic field</li>
          <li>Identify the research phase you need help with</li>
          <li>Get personalized guidance on finding and evaluating sources</li>
          <li>Ask specific questions about your research challenges</li>
        </ol>
      </div>
      
      {showChat ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[500px] mb-4 transition-colors duration-200">
          <ChatInterface 
            initialSystemMessage={`${RESEARCH_SYSTEM_MESSAGE} The student is working on a ${researchTypes.find(t => t.id === researchType)?.name} in the field of ${academicFields.find(f => f.id === academicField)?.name} and needs help with ${researchPhases.find(p => p.id === researchPhase)?.name.toLowerCase()}.`}
            specialization="research"
          />
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Select Research Type</h3>
            <select 
              className="input-field w-full transition-colors duration-200" 
              value={researchType}
              onChange={handleResearchTypeChange}
              aria-label="Select research type"
            >
              <option value="">-- Select your research type --</option>
              {researchTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.icon} {type.name}
                </option>
              ))}
            </select>
            {!researchType && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Please select the type of research you are conducting
              </p>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-3 dark:text-white">Select Academic Field</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {academicFields.map((field) => (
                <div 
                  key={field.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    academicField === field.id 
                      ? 'border-secondary-500 dark:border-secondary-400 bg-secondary-50 dark:bg-secondary-900/30' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-secondary-300 dark:hover:border-secondary-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => handleAcademicFieldChange(field.id)}
                >
                  <div className="font-medium dark:text-white">{field.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Citation styles: {field.citation}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-3 dark:text-white">What Do You Need Help With?</h3>
            <div className="space-y-2">
              {researchPhases.map((phase) => (
                <div 
                  key={phase.id}
                  className={`p-3 border rounded-md cursor-pointer flex items-center transition-all duration-200 ${
                    researchPhase === phase.id 
                      ? 'border-secondary-500 dark:border-secondary-400 bg-secondary-50 dark:bg-secondary-900/30' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-secondary-300 dark:hover:border-secondary-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => handleResearchPhaseChange(phase.id)}
                >
                  <input 
                    type="radio" 
                    name="researchPhase" 
                    checked={researchPhase === phase.id}
                    onChange={() => {}}
                    className="mr-3 accent-secondary-500 dark:accent-secondary-400"
                  />
                  <div>
                    <div className="font-medium dark:text-white">{phase.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{phase.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-200">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {researchType && academicField && researchPhase 
                ? `You're looking for help with ${researchPhases.find(p => p.id === researchPhase)?.name.toLowerCase()} for your ${researchTypes.find(t => t.id === researchType)?.name.toLowerCase()} in ${academicFields.find(f => f.id === academicField)?.name}.` 
                : 'Please complete all selections to get research guidance.'}
            </p>
            <button 
              className={`btn btn-secondary mt-4 ${(!researchType || !academicField || !researchPhase) ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleStartChat}
              disabled={!researchType || !academicField || !researchPhase}
            >
              Get Research Guidance
            </button>
          </div>
        </>
      )}
    </div>
  );
} 