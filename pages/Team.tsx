
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Team = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen pt-20 lg:pt-24">
      <div className="bg-brand-50 dark:bg-brand-950 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold text-brand-900 dark:text-white">{content.team.title}</h1>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{content.team.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20 text-slate-600 dark:text-slate-300 leading-relaxed">
            {content.team.intro.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
        </div>

        {/* Members */}
        <div className="grid grid-cols-1 gap-16">
            {content.team.members.map((member) => (
                <div key={member.id} className="flex flex-col md:flex-row bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="md:w-1/3 h-96 md:h-auto relative bg-brand-100 dark:bg-brand-900/20">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-gold-600 font-bold uppercase tracking-wider text-xs mb-1">{member.role}</span>
                        <h2 className="text-3xl font-serif font-bold text-brand-900 dark:text-white mb-2">{member.name}</h2>
                        <div className="text-sm text-slate-500 dark:text-slate-400 italic mb-6">{member.languages}</div>
                        
                        <div className="space-y-4 text-slate-600 dark:text-slate-300 mb-8">
                            {member.bio.map((para, idx) => (
                                <p key={idx} className="leading-relaxed text-sm md:text-base">{para}</p>
                            ))}
                        </div>
                        
                        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                             <p className="text-sm font-semibold text-brand-900 dark:text-white">Education</p>
                             <p className="text-sm text-slate-600 dark:text-slate-400">{member.education}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
