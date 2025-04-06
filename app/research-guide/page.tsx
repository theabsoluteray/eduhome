import Navbar from '../components/Navbar';
import ResearchClient from './ResearchClient';

export default function ResearchGuidePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="card shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-secondary-600 dark:bg-secondary-700 text-white p-4">
            <h1 className="text-xl font-bold">Research Guide & Source Evaluation</h1>
            <p className="text-sm opacity-90">
              Find reliable sources and evaluate information quality across languages
            </p>
          </div>
          
          {/* Client component */}
          <ResearchClient />
        </div>
        
        {/* Supporting information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-secondary-700 dark:text-secondary-400 mb-4">Research Best Practices</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">✓</span>
                <span>Use a variety of sources (academic journals, books, reputable websites)</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">✓</span>
                <span>Evaluate sources for credibility, accuracy, and relevance</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">✓</span>
                <span>Take organized notes with complete citation information</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">✓</span>
                <span>Synthesize information rather than just summarizing</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-500 dark:text-secondary-400 mr-2">✓</span>
                <span>Use appropriate citation style for your field</span>
              </li>
            </ul>
          </div>
          
          <div className="card p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-secondary-700 dark:text-secondary-400 mb-4">Source Evaluation Criteria</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
                <h3 className="font-semibold">Authority</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Who created the source? What are their credentials?</p>
              </div>
              <div className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
                <h3 className="font-semibold">Accuracy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Is the information supported by evidence? Can it be verified?</p>
              </div>
              <div className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
                <h3 className="font-semibold">Currency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">When was it published? Is it up to date for your topic?</p>
              </div>
              <div className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
                <h3 className="font-semibold">Relevance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Does it relate to your research question? At what depth?</p>
              </div>
              <div className="border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
                <h3 className="font-semibold">Purpose/Bias</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Why was it created? Is there a particular viewpoint?</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}