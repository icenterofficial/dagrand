
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300 pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-brand-50 dark:bg-brand-950 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold text-brand-900 dark:text-white">{content.nav.about}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="prose prose-lg text-slate-600 dark:text-slate-300 mx-auto">
              {content.about.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                      {paragraph}
                  </p>
              ))}
          </div>
          
          <div className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-16">
            <h3 className="text-2xl font-serif font-bold text-brand-900 dark:text-white mb-6 text-center">Our Commitment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                    <h4 className="font-bold text-brand-900 dark:text-white mb-2">Local Expertise</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Deeply rooted in the Cambodian legal framework, serving locally incorporated companies in diverse sectors.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                    <h4 className="font-bold text-brand-900 dark:text-white mb-2">Global Standards</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Serving multinational companies and international investors with insightful, globally informed solutions.</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
