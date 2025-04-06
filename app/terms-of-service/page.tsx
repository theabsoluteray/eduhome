'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen gradient-bg transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
          {/* Header */}
          <div className="bg-primary-600 dark:bg-primary-700 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Terms of Service
            </h1>
            <p className="mt-2 text-primary-100">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8 space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                Welcome to EduHome. These Terms of Service ("Terms") govern your access to and use of our website, products, and services 
                (collectively, the "Services"). Please read these Terms carefully before using our Services.
              </p>
              <p className="mb-4">
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree 
                to these Terms, please do not use our Services.
              </p>
              <p>
                You must be at least 13 years old to use our Services. If you are under 18, you must have permission from a parent or 
                legal guardian to use our Services, and they must agree to these Terms on your behalf.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
              <p className="mb-4">
                EduHome provides educational services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Homework assistance and guidance</li>
                <li>Language learning and practice</li>
                <li>Concept clarification and explanations</li>
                <li>Research guidance and assistance</li>
                <li>Study planning and personalized learning</li>
              </ul>
              <p className="mt-4">
                Our Services use artificial intelligence to provide personalized educational assistance. While we strive to provide 
                accurate and helpful information, our AI-generated content should not be considered a substitute for professional 
                education or advice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
              <p className="mb-3">
                You may need to create an account to access certain features of our Services. When you create an account, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized access to or use of your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate your account if you violate these Terms or if we believe your actions may 
                cause harm to other users, third parties, or us.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. User Content</h2>
              <p className="mb-3">
                Our Services may allow you to upload, submit, store, send, or receive content ("User Content"). By submitting User Content, you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retain ownership rights to your User Content</li>
                <li>
                  Grant EduHome a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, 
                  and distribute your User Content for the purpose of providing and improving our Services
                </li>
                <li>
                  Represent and warrant that you own or have the necessary rights to the User Content and that the User Content does not 
                  infringe on the rights of any third party
                </li>
              </ul>
              <p className="mt-3">
                We do not claim ownership of your User Content, but we need these rights to provide the Services to you and other users.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Prohibited Conduct</h2>
              <p className="mb-3">
                When using our Services, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable law, regulation, or third-party rights</li>
                <li>Submit content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                <li>Attempt to gain unauthorized access to our Services or systems</li>
                <li>Use our Services to distribute malware or other harmful code</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Submit content that infringes on intellectual property rights</li>
                <li>Use our Services to cheat on exams or engage in academic dishonesty</li>
                <li>Use our Services to generate content for unlawful purposes</li>
                <li>Scrape, crawl, or use automated means to access our Services without our permission</li>
              </ul>
              <p className="mt-3">
                We reserve the right to remove any content that violates these Terms and to suspend or terminate your access to our Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Educational Purpose and Academic Integrity</h2>
              <p className="mb-3">
                Our Services are designed to help you learn and understand educational concepts. We expect users to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our Services to support learning, not to circumvent it</li>
                <li>Comply with their educational institution's academic integrity policies</li>
                <li>Properly cite any information obtained through our Services when required</li>
                <li>Take responsibility for their own learning and educational outcomes</li>
              </ul>
              <p className="mt-3">
                We encourage critical thinking and understanding rather than mere completion of assignments. Our Services should be 
                used as a learning aid, not a substitute for independent thought or original work.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. Intellectual Property Rights</h2>
              <p className="mb-3">
                Our Services and their contents, features, and functionality are owned by EduHome and its licensors and are protected 
                by copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="mb-3">
                You may not use, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                republish, download, store, or transmit any of our materials without our prior written consent, except as follows:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>For your personal, non-commercial use</li>
                <li>As permitted by these Terms</li>
                <li>As we expressly provide on the Services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-3">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mb-3">
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Our Services will always be available, uninterrupted, secure, or error-free</li>
                <li>The results obtained from using our Services will be accurate or reliable</li>
                <li>The quality of information, content, or other material obtained through our Services will meet your expectations</li>
                <li>Any errors in our Services will be corrected</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EDUHOME OR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, 
                SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your access to or use of or inability to access or use our Services</li>
                <li>Any conduct or content of any third party on our Services</li>
                <li>Any content obtained from our Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
              <p>
                We may revise these Terms from time to time at our sole discretion. All changes are effective immediately when we 
                post them. By continuing to access or use our Services after any revisions become effective, you agree to be bound 
                by the revised Terms. Please check the Terms periodically for changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
              <p>
                These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the State 
                of California, without giving effect to any choice or conflict of law provision or rule. Any legal action or proceeding 
                relating to these Terms or the Services shall be instituted in the federal or state courts located in San Francisco County, 
                California.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
              <p className="mb-3">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg inline-block">
                <p className="font-medium">Email: <a href="mailto:legal@eduhome.com" className="text-primary-600 dark:text-primary-400 hover:underline">legal@eduhome.com</a></p>
                <p className="font-medium mt-1">Address: 123 Education Lane, Learning City, LC 12345</p>
              </div>
            </section>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By using EduHome's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <div className="mt-4">
                <Link href="/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline">
                  View our Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 