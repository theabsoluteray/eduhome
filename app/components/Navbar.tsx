'use client';

import Link from 'next/link';
import { FC } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <nav className="shadow-md bg-primary-600 text-white dark:bg-gray-800 dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-white dark:text-primary-300">
                EduHome
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/homework-helper" 
                className="border-transparent hover:border-primary-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-white hover:text-primary-400 dark:text-white dark:hover:text-primary-400"
              >
                Homework Helper
              </Link>
              <Link 
                href="/language-lab" 
                className="border-transparent hover:border-primary-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-white hover:text-primary-400 dark:text-white dark:hover:text-primary-400"
              >
                Language Lab
              </Link>
              <Link 
                href="/concept-clarification" 
                className="border-transparent hover:border-primary-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-white hover:text-primary-400 dark:text-white dark:hover:text-primary-400"
              >
                Concept Clarification
              </Link>
              <Link 
                href="/research-guide" 
                className="border-transparent hover:border-primary-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-white hover:text-primary-400 dark:text-white dark:hover:text-primary-400"
              >
                Research Guide
              </Link>
              <Link 
                href="/study-assistant" 
                className="border-transparent hover:border-primary-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-white hover:text-primary-400 dark:text-white dark:hover:text-primary-400"
              >
                Study Assistant
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              href="/signin" 
              className="text-white hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="btn btn-primary text-white hover:text-gray-100 dark:text-white dark:hover:text-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 