import Navbar from '../components/Navbar';
import ConceptClient from './ConceptClient';

export default function ConceptClarificationPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-primary-700 text-white p-4">
            <h1 className="text-xl font-bold">Concept Clarification Center</h1>
            <p className="text-sm opacity-90">
              Understand complex concepts with explanations tailored to your learning style
            </p>
          </div>
          
          {/* Client component */}
          <ConceptClient />
        </div>
        
        {/* Supporting information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Benefits of Concept Clarification</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Receive explanations tailored to your learning style</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Get multiple perspectives on complex topics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Bridge knowledge gaps with personalized assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Explore connections between related concepts</span>
              </li>
            </ul>
          </div>
          
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">How It Works</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700 dark:text-gray-300">
              <li className="pl-2">
                <span className="font-medium text-gray-900 dark:text-white">Select your topic</span>
                <p className="mt-1 ml-6 text-sm text-gray-600 dark:text-gray-400">Choose from a wide range of academic subjects</p>
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900 dark:text-white">Specify your learning preferences</span>
                <p className="mt-1 ml-6 text-sm text-gray-600 dark:text-gray-400">Select your learning style and difficulty level</p>
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900 dark:text-white">Ask about specific concepts</span>
                <p className="mt-1 ml-6 text-sm text-gray-600 dark:text-gray-400">Get tailored explanations with relevant examples</p>
              </li>
              <li className="pl-2">
                <span className="font-medium text-gray-900 dark:text-white">Dive deeper with follow-up questions</span>
                <p className="mt-1 ml-6 text-sm text-gray-600 dark:text-gray-400">The AI adapts to your level of understanding</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}