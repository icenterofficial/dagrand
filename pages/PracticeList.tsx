

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Scale } from 'lucide-react';

const PracticeList = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Modern Tech Header */}
      <div className="relative bg-brand-950 py-20 lg:py-28 overflow-hidden">
        
        {/* Grid Overlay - No Crossed Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 backdrop-blur-sm border border-white/10 animate-fade-in-up">
                <Scale className="text-gold-500" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white animate-fade-in-up delay-75">{content.practices.title}</h1>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-100 text-lg font-light">{content.practices.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.practices.items.map((item, idx) => (
                <Link 
                    to={`/practices/${item.id}`} 
                    key={item.id} 
                    className="group bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-gold-200 dark:hover:border-gold-600 animate-fade-in-up relative overflow-hidden"
                    style={{ animationDelay: `${idx * 50}ms` }}
                >
                    {/* Hover Effect Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>

                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="w-10 h-1 bg-gold-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover:text-gold-500 transition-colors" size={20}/>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-brand-900 dark:text-white mb-3 group-hover:text-gold-600 transition-colors relative z-10">{item.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm relative z-10">{item.shortDesc}</p>
                    <span className="text-sm font-bold text-brand-900 dark:text-gold-500 flex items-center gap-2 group-hover:gap-3 transition-all relative z-10">
                        Read details <ArrowRight size={14} className="text-gold-500"/>
                    </span>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeList;
