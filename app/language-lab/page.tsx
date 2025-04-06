import Navbar from '../components/Navbar';
import LanguageClient from './LanguageClient';

const LANGUAGE_LAB_SYSTEM_MESSAGE = `You are a language learning assistant specializing in language acquisition.
Help students practice and improve their language skills through conversation, pronunciation feedback,
grammar correction, and vocabulary building. Adjust your language complexity based on the student's proficiency level.
When appropriate, provide cultural context for language use and suggest additional practice exercises.`;

export default function LanguageLab() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-secondary-600 dark:bg-secondary-700 text-white p-4">
            <h1 className="text-xl font-bold">Language Acquisition Laboratory</h1>
            <p className="text-sm opacity-90">
              Practice conversations, improve pronunciation, and enhance your language skills
            </p>
          </div>
          
          {/* Client component with interactive elements */}
          <LanguageClient />
        </div>
        
        {/* Language learning progress section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Track Your Language Learning Progress</h2>
          
          <div className="card p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">0</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Practice Sessions</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">0</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Vocabulary Words</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">0</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Grammar Points</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">0</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Confidence Score</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-3">Recent Activity</h3>
              <p className="text-gray-500 dark:text-gray-400 italic text-center py-8">
                Your language learning activity will appear here after you start practicing.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 