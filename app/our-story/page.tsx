'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OurStory() {
  return (
    <div className="min-h-screen gradient-bg transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-primary-700 p-6 md:p-10">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="mt-2 text-primary-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              How EduHome is transforming education for all students
            </motion.p>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-10 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At EduHome, we believe that education should be accessible to everyone, regardless of language barriers or learning challenges. 
                Our mission is to create a truly inclusive educational environment where every student can thrive.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We harness the power of AI technology to break down language barriers, adapt to diverse learning styles, and make 
                high-quality educational support available to students worldwide.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How It All Started</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">The Challenge</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    In 2021, our founders witnessed firsthand how language barriers and limited access to personalized help were creating 
                    educational inequalities. Students who weren't native speakers or had different learning styles often struggled to keep up.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">The Vision</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    What if technology could adapt to each student, rather than forcing students to adapt to a one-size-fits-all approach? 
                    This question sparked the idea for an AI-powered platform that could understand and respond to each student's unique needs.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                With this vision in mind, EduHome was born in early 2022. Starting with a small team of educators and AI specialists, 
                we set out to build a platform that could truly understand and address the needs of diverse learners.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-5 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Accessibility">🌍</span>
                  </div>
                  <h3 className="font-medium text-primary-900 dark:text-primary-300 mb-2">Accessibility</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Education should be accessible to all students, regardless of language, location, or learning style.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/20 p-5 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Innovation">💡</span>
                  </div>
                  <h3 className="font-medium text-primary-900 dark:text-primary-300 mb-2">Innovation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We continuously push the boundaries of what's possible in educational technology.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/20 p-5 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mb-4">
                    <span className="text-2xl" role="img" aria-label="Empowerment">🚀</span>
                  </div>
                  <h3 className="font-medium text-primary-900 dark:text-primary-300 mb-2">Empowerment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We help students gain confidence through understanding, not just memorization.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Since our launch, EduHome has helped thousands of students overcome language barriers and learning challenges:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Students from over 40 countries using our platform in 20+ languages</li>
                <li>Average grade improvements of 15% for students using EduHome regularly</li>
                <li>92% of users report increased confidence in tackling challenging subjects</li>
                <li>Partnerships with 50+ educational institutions to provide access to underserved communities</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                These numbers represent more than just statistics—they represent real students who now have the tools they need to succeed in their educational journey.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Looking Forward</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As we continue to grow, our focus remains firmly on our mission to make education accessible to all. We're constantly working to:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Expand our language capabilities to support even more students</li>
                <li>Enhance our AI to better understand and adapt to different learning styles</li>
                <li>Develop new tools to address specific educational challenges</li>
                <li>Partner with more institutions to reach students who need our help the most</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                We're excited about the future and the opportunity to help more students reach their full potential.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Want to join our mission?</h3>
                <p className="text-gray-700 dark:text-gray-300">We're always looking for passionate people to join our team.</p>
              </div>
              <Link 
                href="#" 
                className="btn btn-primary mt-4 md:mt-0 text-center"
              >
                View Careers
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
} 