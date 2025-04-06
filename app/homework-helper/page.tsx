import Navbar from '../components/Navbar';
import HomeworkClient from './HomeworkClient';

// Sample system message for the homework helper
const SYSTEM_MESSAGE = `You are a helpful educational assistant specializing in homework help. 
Your goal is to guide students through their assignments without simply giving them the answers.
Provide explanations, ask guiding questions, and offer step-by-step assistance that promotes learning.
Adapt your language to the student's proficiency level and respond in their preferred language.`;

export default function HomeworkHelper() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-primary-700 text-white p-4">
            <h1 className="text-xl font-bold">Multilingual Homework Helper</h1>
            <p className="text-sm opacity-90">
              Upload your assignment in any language and receive step-by-step guidance
            </p>
          </div>
          
          {/* Client component with interactive elements */}
          <HomeworkClient />
        </div>
        
        {/* Supporting information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">How This Helps Your Learning</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Break down complex problems into manageable steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Understand concepts in your preferred language</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Receive explanations tailored to your academic level</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 dark:text-primary-400 mr-2">✓</span>
                <span>Learn problem-solving methods, not just answers</span>
              </li>
            </ul>
          </div>
          
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">Subject Areas</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <span className="font-medium block">Mathematics</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Algebra, Calculus, Statistics</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <span className="font-medium block">Science</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Physics, Chemistry, Biology</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <span className="font-medium block">Languages</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Grammar, Composition, Literature</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                <span className="font-medium block">Social Studies</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">History, Geography, Economics</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded col-span-2">
                <span className="font-medium block">Computer Science</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Programming, Algorithms, Data Structures</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 