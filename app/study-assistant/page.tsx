import Navbar from '../components/Navbar';
import StudyClient from './StudyClient';

export default function StudyAssistantPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-primary-700 text-white p-4">
            <h1 className="text-xl font-bold">Personalized Study Assistant</h1>
            <p className="text-sm opacity-90">
              Create customized study plans based on your learning preferences
            </p>
          </div>
          
          {/* Client component */}
          <StudyClient />
        </div>
        
        {/* Supporting information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Effective Study Techniques</h2>
            <div className="space-y-3">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <h3 className="font-medium">Spaced Repetition</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Review material at increasing intervals to improve long-term retention</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <h3 className="font-medium">Active Recall</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Test yourself rather than passively rereading material</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <h3 className="font-medium">Pomodoro Technique</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Work in focused 25-minute intervals with short breaks</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <h3 className="font-medium">Interleaving</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Mix different topics instead of focusing on one subject for too long</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                <h3 className="font-medium">Feynman Technique</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Explain concepts in simple terms to identify knowledge gaps</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Study Plan Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Customized schedules based on your availability</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Practice questions tailored to your learning goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Subject-specific study techniques and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Progress tracking and adaptive recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Memory aids and concept mapping suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Multilingual learning support across subjects</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}