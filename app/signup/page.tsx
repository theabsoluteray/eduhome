'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function SignupPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setFormError('All fields are required');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setFormError('Password must be at least 8 characters');
      return;
    }

    try {
      setIsSubmitting(true);
      // Here you would normally connect to your auth service
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Signup data:', formData);
      
      // Redirect to dashboard or show success message
      window.location.href = '/';
    } catch (error) {
      console.error('Signup error:', error);
      setFormError('An error occurred during signup. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary-700 dark:text-primary-400">Join EduHome Today</h2>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">✓</span>
                <span>Access personalized learning assistance in multiple languages</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">✓</span>
                <span>Get help with homework, research, and language practice</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">✓</span>
                <span>Receive customized study plans and concept clarifications</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">✓</span>
                <span>Track your progress and learning achievements</span>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          {/* Right column - Signup form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
            
            {formError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-md mb-4 bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-200"
              >
                {formError}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input-field dark:input-field-dark"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input-field dark:input-field-dark"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input-field dark:input-field-dark"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                  Must be at least 8 characters long
                </p>
              </motion.div>
              
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="input-field dark:input-field-dark"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300" htmlFor="role">
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  className="input-field dark:input-field-dark"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="researcher">Researcher</option>
                </select>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button
                  type="submit"
                  className={`w-full btn btn-primary dark:btn-primary-dark ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </motion.div>
            </form>
            
            <motion.div 
              className="mt-6 text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Already have an account?{' '}
              <Link href="/signin" className="text-primary-600 hover:underline font-medium dark:text-primary-400">
                Sign in here
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 