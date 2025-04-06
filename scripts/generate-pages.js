/**
 * Generate Feature Pages Script
 * 
 * This script generates skeleton pages for features we haven't created yet:
 * - Concept Clarification
 * - Research Guide
 * - Study Assistant
 */

const fs = require('fs');
const path = require('path');

const featurePages = [
  {
    path: 'concept-clarification',
    title: 'Concept Clarification Center',
    description: 'Understand complex concepts with explanations tailored to your learning style',
    color: 'primary'
  },
  {
    path: 'research-guide',
    title: 'Research Guide & Source Evaluation',
    description: 'Find reliable sources and evaluate information quality across languages',
    color: 'secondary'
  },
  {
    path: 'study-assistant',
    title: 'Personalized Study Assistant',
    description: 'Create customized study plans based on your learning preferences',
    color: 'primary'
  }
];

// Template for the page content
const generatePageContent = ({ title, description, color }) => `import Navbar from '../components/Navbar';

export default function FeaturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-${color}-600 text-white p-4">
            <h1 className="text-xl font-bold">${title}</h1>
            <p className="text-sm opacity-90">
              ${description}
            </p>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <div className="bg-gray-100 p-4 mb-6 rounded-lg">
              <h2 className="font-medium text-gray-800 mb-2">Coming Soon</h2>
              <p className="text-gray-700">
                This feature is under development. Check back soon for a full implementation!
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-500">Feature preview</p>
              <p className="text-gray-700 font-medium mt-2">
                This page will feature an AI-powered interface to ${description.toLowerCase()}.
              </p>
              <button className="btn btn-${color} mt-4">Preview Demo</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}`;

// Create the feature pages
featurePages.forEach(feature => {
  const dirPath = path.join(__dirname, '..', 'app', feature.path);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
  
  // Write the file
  fs.writeFileSync(filePath, generatePageContent(feature));
  console.log(`Generated page: ${filePath}`);
});

console.log('All feature pages generated successfully!'); 