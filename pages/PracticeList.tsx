
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const PracticeList = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 pt-20 lg:pt-24">
      <div className="bg-brand-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold animate-fade-in-up">{content.practices.title}</h1>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-100">{content.practices.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.practices.items.map((item, idx) => (
                <Link 
                    to={`/practices/${item.id}`} 
                    key={item.id} 
                    className="group bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-gold-200 dark:hover:border-gold-600 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 50}ms` }}
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-1 bg-gold-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
                        <ChevronRight className="text-slate-300 dark:text-slate-600 group-hover:text-gold-500 transition-colors" size={20}/>
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-brand-900 dark:text-white mb-3 group-hover:text-gold-600 transition-colors">{item.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm">{item.shortDesc}</p>
                    <span className="text-sm font-bold text-brand-900 dark:text-gold-500 flex items-center gap-2 group-hover:gap-3 transition-all">
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
