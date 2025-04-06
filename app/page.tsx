'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen gradient-bg transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Learning Without <span className="text-primary-600 dark:text-primary-300">Language Barriers</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              Experience education in a new way with our Groq-powered multilingual AI assistant. 
              Get homework help, language practice, conceptual clarification, and personalized 
              study plans—all with the speed and accuracy of Groq's LPU technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/homework-helper" className="btn btn-primary text-white hover:text-gray-100 text-center">
                  Try Homework Helper
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/language-lab" className="btn btn-secondary text-white hover:text-gray-100 text-center">
                  Explore Language Lab
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700">
              <div className="relative w-full h-full">
                {/* Animated globe */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full flex items-center justify-center bg-white bg-opacity-10 dark:bg-opacity-5"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-40 h-40 rounded-full flex items-center justify-center bg-white bg-opacity-20 dark:bg-opacity-10">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center bg-white bg-opacity-30 dark:bg-opacity-15">
                      <motion.div 
                        className="text-6xl"
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        🌐
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating icons */}
                <motion.div 
                  className="absolute top-[15%] left-[20%]"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl">📚</span>
                </motion.div>
                <motion.div 
                  className="absolute bottom-[15%] right-[20%]"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl">🔍</span>
                </motion.div>
                <motion.div 
                  className="absolute top-[25%] right-[25%]"
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl">🌎</span>
                </motion.div>
                <motion.div 
                  className="absolute bottom-[25%] left-[25%]"
                  animate={{ y: [15, -5, 15] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl">💡</span>
                </motion.div>
                
                {/* Particle effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute rounded-full bg-white dark:bg-blue-400 opacity-60"
                      initial={{ 
                        x: Math.random() * 100 - 50 + '%', 
                        y: Math.random() * 100 - 50 + '%',
                        opacity: 0.2 + Math.random() * 0.5
                      }}
                      animate={{ 
                        x: [
                          Math.random() * 100 - 50 + '%', 
                          Math.random() * 100 - 50 + '%',
                          Math.random() * 100 - 50 + '%'
                        ],
                        y: [
                          Math.random() * 100 - 50 + '%', 
                          Math.random() * 100 - 50 + '%',
                          Math.random() * 100 - 50 + '%'
                        ],
                        opacity: [0.2 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 0.2 + Math.random() * 0.5]
                      }}
                      transition={{ 
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        width: 2 + Math.random() * 4 + 'px',
                        height: 2 + Math.random() * 4 + 'px'
                      }}
                    />
                  ))}
                </div>
                
                <div className="absolute bottom-4 w-full text-center text-white text-2xl font-bold">
                  Interactive Learning Platform
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How Our AI Assistant Helps You Learn
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="card hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 h-12 w-12 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multilingual Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Communicate in your preferred language and receive responses tailored to your 
                language proficiency level, making learning accessible to everyone.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="card hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 h-12 w-12 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Homework Helper</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload assignments in any language and receive step-by-step guidance 
                that helps you learn the material, not just complete the work.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="card hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 h-12 w-12 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research Guide</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find reliable sources, evaluate information quality, and synthesize 
                findings across multiple references and languages.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/concept-clarification" className="btn btn-primary text-white hover:text-gray-100">
                Explore All Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduHome</h3>
              <p className="text-gray-300 dark:text-gray-400">
                Empowering students worldwide with multilingual AI-powered educational assistance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link href="/homework-helper" className="text-gray-300 hover:text-white dark:text-gray-400">Homework Helper</Link></li>
                <li><Link href="/language-lab" className="text-gray-300 hover:text-white dark:text-gray-400">Language Lab</Link></li>
                <li><Link href="/concept-clarification" className="text-gray-300 hover:text-white dark:text-gray-400">Concept Clarification</Link></li>
                <li><Link href="/research-guide" className="text-gray-300 hover:text-white dark:text-gray-400">Research Guide</Link></li>
                <li><Link href="/study-assistant" className="text-gray-300 hover:text-white dark:text-gray-400">Study Assistant</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link href="/our-story" className="text-gray-300 hover:text-white dark:text-gray-400">Our Story</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white dark:text-gray-400">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-300 hover:text-white dark:text-gray-400">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300 dark:text-gray-400 mb-2">info@eduhome.com</p>
              <p className="text-gray-300 dark:text-gray-400">Support: support@eduhome.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
            <p>&copy; {new Date().getFullYear()} EduHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 