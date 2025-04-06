'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen gradient-bg transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-primary-700 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-primary-100">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="mb-4">
                At EduHome ("we", "our", or "us"), we are committed to protecting your privacy and providing a safe online experience. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
              </p>
              <p>
                By accessing or using EduHome, you agree to the collection and use of information in accordance with this policy. If you do not 
                agree with our policies and practices, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Personal Information</h3>
                  <p>We may collect the following types of personal information:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Contact information (name, email address, etc.)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Educational information (academic level, learning preferences)</li>
                    <li>Content you provide when using our services (questions, assignments, etc.)</li>
                    <li>Profile information and preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Usage Information</h3>
                  <p>We automatically collect certain information about how you interact with our services:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Log data (IP address, browser type, pages visited, time spent)</li>
                    <li>Device information (device type, operating system)</li>
                    <li>Interaction data (features used, actions taken)</li>
                    <li>Performance data (response times, errors encountered)</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience based on your preferences and educational needs</li>
                <li>Communicate with you about our services, updates, and educational content</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends to enhance user experience</li>
                <li>Protect the security and integrity of our platform</li>
                <li>Comply with legal obligations and enforce our terms of service</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-3">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Service Providers:</span> We work with third-party service providers who help us operate, 
                  provide, and improve our services (such as cloud hosting, analytics, and customer support).
                </li>
                <li>
                  <span className="font-medium">Legal Requirements:</span> We may disclose information if required by law, 
                  regulation, legal process, or governmental request.
                </li>
                <li>
                  <span className="font-medium">Business Transfers:</span> If we are involved in a merger, acquisition, or sale of assets, 
                  your information may be transferred as part of that transaction.
                </li>
                <li>
                  <span className="font-medium">Protection of Rights:</span> We may share information to protect the safety, rights, or property 
                  of EduHome, our users, or others.
                </li>
                <li>
                  <span className="font-medium">With Your Consent:</span> We may share information with third parties when you give us your consent to do so.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Similar Technologies</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to collect and track information about your browsing activities. 
                These technologies help us deliver a better and more personalized service by enabling us to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our services</li>
                <li>Enhance site functionality and user experience</li>
                <li>Process transactions and prevent fraud</li>
                <li>Analyze the performance of our website and services</li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use 
                some features of our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p className="mb-3">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage 
                is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p>
                We regularly review our security practices and update them as necessary to maintain appropriate levels of protection.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Rights and Choices</h2>
              <p className="mb-3">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Access and Portability:</span> You can request access to the personal information we hold about you 
                  and, in some cases, receive it in a structured, commonly used format.
                </li>
                <li>
                  <span className="font-medium">Correction:</span> You can request that we correct inaccurate or incomplete information about you.
                </li>
                <li>
                  <span className="font-medium">Deletion:</span> You can request that we delete your personal information in certain circumstances.
                </li>
                <li>
                  <span className="font-medium">Restriction and Objection:</span> You can request that we restrict processing of your information or 
                  object to certain processing activities.
                </li>
                <li>
                  <span className="font-medium">Withdrawal of Consent:</span> Where we rely on your consent to process your information, 
                  you can withdraw that consent at any time.
                </li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from 
                children under 13. If we learn we have collected personal information from a child under 13, we will take steps to 
                delete that information. If you believe we might have any information from or about a child under 13, please contact us.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, 
                or regulatory reasons. We will post the revised policy on this page with a new "Last Updated" date. We encourage you to 
                review this Privacy Policy periodically for the latest information on our privacy practices.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="mb-3">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg inline-block">
                <p className="font-medium">Email: <a href="mailto:privacy@eduhome.com" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@eduhome.com</a></p>
                <p className="font-medium mt-1">Address: 123 Education Lane, Learning City, LC 12345</p>
              </div>
            </section>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By using EduHome's services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
              <div className="mt-4">
                <Link href="/terms-of-service" className="text-primary-600 dark:text-primary-400 hover:underline">
                  View our Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 