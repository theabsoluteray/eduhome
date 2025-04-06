'use client';

import { useState } from 'react';
import ChatInterface from '../components/ChatInterface';

const STUDY_SYSTEM_MESSAGE = `You are a study assistant specializing in personalized learning strategies.
Your goal is to help students develop effective study plans based on their learning preferences, schedule, and subject requirements.
Provide guidance on study techniques, time management, and materials organization.
Help students prepare for exams, projects, and long-term knowledge retention with personalized approaches.`;

export default function StudyClient() {
  const [studySubject, setStudySubject] = useState('');
  const [studyGoal, setStudyGoal] = useState('');
  const [studyTime, setStudyTime] = useState('');
  const [studyStyle, setStudyStyle] = useState('');
  const [showChat, setShowChat] = useState(false);
  
  const studySubjects = [
    { id: 'math', name: 'Mathematics' },
    { id: 'science', name: 'Science/Engineering' },
    { id: 'humanities', name: 'Humanities/Social Sciences' },
    { id: 'language', name: 'Languages' },
    { id: 'business', name: 'Business/Economics' },
    { id: 'arts', name: 'Arts/Creative Fields' },
    { id: 'test', name: 'Test Preparation' },
    { id: 'computer', name: 'Computer Science' },
    { id: 'medicine', name: 'Medicine/Health Sciences' },
    { id: 'law', name: 'Law/Legal Studies' },
    { id: 'education', name: 'Education' },
    { id: 'other', name: 'Other/Custom' }
  ];
  
  const studyGoals = [
    { id: 'exam', name: 'Exam Preparation', icon: '📝' },
    { id: 'project', name: 'Project Completion', icon: '📊' },
    { id: 'mastery', name: 'Subject Mastery', icon: '🏆' },
    { id: 'retention', name: 'Long-term Retention', icon: '🧠' },
    { id: 'skills', name: 'Skill Development', icon: '🛠️' }
  ];
  
  const studyTimes = [
    { id: 'short', name: 'Short Sessions (15-30min)', freq: 'Frequent' },
    { id: 'medium', name: 'Medium Sessions (1-2hrs)', freq: 'Regular' },
    { id: 'long', name: 'Long Sessions (3+ hrs)', freq: 'Occasional' },
    { id: 'mixed', name: 'Mixed Schedule', freq: 'Varied' }
  ];
  
  const studyStyles = [
    { id: 'visual', name: 'Visual Learner', desc: 'Diagrams, charts, mind maps' },
    { id: 'auditory', name: 'Auditory Learner', desc: 'Lectures, discussions, recordings' },
    { id: 'reading', name: 'Reading/Writing', desc: 'Notes, textbooks, writing' },
    { id: 'kinesthetic', name: 'Hands-on Learner', desc: 'Practice, examples, activities' },
    { id: 'social', name: 'Social Learner', desc: 'Group study, teaching others' },
    { id: 'solitary', name: 'Solitary Learner', desc: 'Independent study, self-paced' }
  ];
  
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStudySubject(e.target.value);
  };
  
  const handleGoalSelect = (id: string) => {
    setStudyGoal(id);
  };
  
  const handleTimeSelect = (id: string) => {
    setStudyTime(id);
  };
  
  const handleStyleSelect = (id: string) => {
    setStudyStyle(id);
  };
  
  const handleStartChat = () => {
    if (studySubject && studyGoal && studyTime && studyStyle) {
      setShowChat(true);
    } else {
      alert('Please complete all selections to continue.');
    }
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 mb-6 rounded-lg transition-colors duration-200">
        <h2 className="font-medium text-gray-800 dark:text-white mb-2">How to use the Study Assistant:</h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Select your subject area and specific study goals</li>
          <li>Specify your preferred study time and learning style</li>
          <li>The AI will create a personalized study plan tailored to your needs</li>
          <li>Ask for specific study techniques or request practice questions</li>
        </ol>
      </div>
      
      {showChat ? (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg h-[500px] mb-4 transition-colors duration-200">
          <ChatInterface 
            initialSystemMessage={`${STUDY_SYSTEM_MESSAGE} The student is studying ${studySubjects.find(s => s.id === studySubject)?.name} with the goal of ${studyGoals.find(g => g.id === studyGoal)?.name.toLowerCase()}, prefers ${studyTimes.find(t => t.id === studyTime)?.name.toLowerCase()} study sessions, and identifies as a ${studyStyles.find(s => s.id === studyStyle)?.name.toLowerCase()}.`}
            specialization="study"
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Subject Area</h3>
              <select 
                className="input-field w-full transition-colors duration-200" 
                value={studySubject}
                onChange={handleSubjectChange}
                aria-label="Select study subject"
              >
                <option value="">-- Select your subject --</option>
                {studySubjects.map(subject => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>
              {!studySubject && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Please select the subject you're studying
                </p>
              )}
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Study Goal</h3>
              <div className="grid grid-cols-1 gap-2">
                {studyGoals.map((goal) => (
                  <div 
                    key={goal.id}
                    className={`p-3 border rounded-md cursor-pointer flex items-center transition-all duration-200 ${
                      studyGoal === goal.id 
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => handleGoalSelect(goal.id)}
                  >
                    <span className="text-2xl mr-3">{goal.icon}</span>
                    <span className="font-medium dark:text-white">{goal.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Preferred Study Time</h3>
              <div className="space-y-2">
                {studyTimes.map((time) => (
                  <div 
                    key={time.id}
                    className={`p-3 border rounded-md cursor-pointer transition-all duration-200 ${
                      studyTime === time.id 
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => handleTimeSelect(time.id)}
                  >
                    <div className="font-medium dark:text-white">{time.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Frequency: {time.freq}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-200">
              <h3 className="font-medium text-lg mb-3 dark:text-white">Learning Style</h3>
              <div className="space-y-2">
                {studyStyles.map((style) => (
                  <div 
                    key={style.id}
                    className={`p-3 border rounded-md cursor-pointer transition-all duration-200 ${
                      studyStyle === style.id 
                        ? 'border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => handleStyleSelect(style.id)}
                  >
                    <div className="font-medium dark:text-white">{style.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{style.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-200">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {studySubject && studyGoal && studyTime && studyStyle 
                ? `You're studying ${studySubjects.find(s => s.id === studySubject)?.name} for ${studyGoals.find(g => g.id === studyGoal)?.name.toLowerCase()} with ${studyTimes.find(t => t.id === studyTime)?.name.toLowerCase()} as a ${studyStyles.find(s => s.id === studyStyle)?.name.toLowerCase()}.` 
                : 'Complete all selections to get your personalized study plan.'}
            </p>
            <button 
              className={`btn btn-primary mt-4 ${(!studySubject || !studyGoal || !studyTime || !studyStyle) ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleStartChat}
              disabled={!studySubject || !studyGoal || !studyTime || !studyStyle}
            >
              Create Study Plan
            </button>
          </div>
        </>
      )}
    </div>
  );
} 