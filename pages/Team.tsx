

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail } from 'lucide-react';

const Team = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      {/* Modern Tech Header */}
      <div className="relative bg-brand-950 py-20 lg:py-28 overflow-hidden">
        {/* Tech Grid Pattern - Size Reduced to 2rem */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-700/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white animate-fade-in-up">{content.team.title}</h1>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg font-light animate-fade-in-up delay-100">{content.team.subtitle}</p>
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
                <div key={member.id} className="flex flex-col md:flex-row bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="md:w-1/3 h-96 md:h-auto relative bg-brand-100 dark:bg-brand-900/20 overflow-hidden">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                        
                        <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                             <div>
                                <p className="text-sm font-semibold text-brand-900 dark:text-white mb-1">Education</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{member.education}</p>
                             </div>

                             {member.contacts && (
                                <div className="space-y-3">
                                    {member.contacts.phone && (
                                        <div className="flex items-start gap-3 group">
                                            <Phone className="w-4 h-4 text-gold-600 mt-1 shrink-0" />
                                            <div>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone / Telegram / WhatsApp</span>
                                                <a href={`tel:${member.contacts.phone}`} className="text-slate-700 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white font-medium text-sm transition-colors">{member.contacts.phone}</a>
                                            </div>
                                        </div>
                                    )}
                                    {member.contacts.email && (
                                        <div className="flex items-start gap-3 group">
                                            <Mail className="w-4 h-4 text-gold-600 mt-1 shrink-0" />
                                            <div>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email</span>
                                                <a href={`mailto:${member.contacts.email}`} className="text-slate-700 dark:text-slate-300 hover:text-brand-900 dark:hover:text-white font-medium text-sm transition-colors">{member.contacts.email}</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                             )}
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
