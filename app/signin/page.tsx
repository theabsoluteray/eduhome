'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function SigninPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setFormError('Email and password are required');
      return;
    }

    try {
      setIsSubmitting(true);
      // Here you would normally connect to your auth service
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Signin data:', formData);
      
      // Redirect to dashboard or home page
      window.location.href = '/';
    } catch (error) {
      console.error('Signin error:', error);
      setFormError('Invalid email or password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="max-w-md mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">Sign In to GroqEdu</h2>
          </motion.div>
          
          {formError && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 rounded-md mb-4 bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-200"
            >
              {formError}
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit}>
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
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
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                  Password
                </label>
                <Link href="#" className="text-xs text-primary-600 hover:underline dark:text-primary-400">
                  Forgot Password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className="input-field dark:input-field-dark"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </motion.div>
            
            <motion.div 
              className="mb-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded focus:ring-offset-0 text-primary-600 focus:ring-primary-500 border-gray-300 dark:text-primary-400 dark:focus:ring-primary-400 dark:border-gray-600"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
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
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </motion.div>
          </form>
          
          <motion.div 
            className="mt-8 pt-6 border-t text-center text-sm border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="mb-4">Or sign in with</p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white"
              >
                G
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white"
              >
                A
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white"
              >
                M
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-6 text-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-primary-600 hover:underline font-medium dark:text-primary-400">
              Sign up here
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 