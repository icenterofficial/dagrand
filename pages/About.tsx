

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      {/* Modern Tech Header */}
      <div className="relative bg-brand-950 py-20 lg:py-28 overflow-hidden">
        {/* Tech Grid Pattern - Size Reduced to 2rem */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        
        {/* Radial Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[radial-gradient(circle_500px_at_50%_-100px,#cc993333,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight animate-fade-in-up">
              {content.nav.about}
            </h1>
            <div className="h-1 w-20 bg-gold-500 mx-auto mt-6 rounded-full animate-fade-in-up delay-100"></div>
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
