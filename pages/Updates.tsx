

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useArticles } from '../context/ArticleContext';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Romduol from '../components/Romduol';

const Updates = () => {
  const { content } = useLanguage();
  const { articles } = useArticles();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get filter from URL or default to 'all'
  const currentFilter = searchParams.get('category') || 'all';

  const handleFilterChange = (category: string) => {
      setSearchParams({ category });
  };

  const filteredArticles = currentFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === currentFilter);

  const getCategoryName = (catKey: string) => {
    // @ts-ignore
    return content.updates.categories[catKey] || catKey;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Modern Tech Header */}
      <div className="relative bg-brand-950 py-20 lg:py-28 overflow-hidden">
        {/* Subtle Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        
        <Romduol className="absolute -top-20 -right-20 w-96 h-96 text-white/5 rotate-12 animate-pulse-slow" />
        
        {/* Glowing orb effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white animate-fade-in-up">{content.updates.title}</h1>
            <p className="mt-4 text-slate-300 max-w-2xl mx-auto animate-fade-in-up delay-100 font-light text-lg">{content.updates.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in delay-200">
            {Object.entries(content.updates.categories).map(([key, label]) => (
                <button
                    key={key}
                    onClick={() => handleFilterChange(key)}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                        currentFilter === key 
                        ? 'bg-gold-600 text-white shadow-lg transform scale-105' 
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-gold-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                    }`}
                >
                    {label}
                </button>
            ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
                <div key={article.id} className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider flex items-center gap-2 shadow-sm">
                            <Tag size={12} className="text-gold-500"/>
                            {getCategoryName(article.category)}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col relative">
                        {/* Decorative watermark inside card */}
                        <Romduol className="absolute bottom-4 right-4 w-24 h-24 text-gold-500/10 opacity-30 rotate-12 group-hover:rotate-45 transition-transform duration-700 pointer-events-none" />

                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                            <span className="flex items-center gap-1"><Calendar size={14}/> {article.date}</span>
                            <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                            <span className="flex items-center gap-1"><User size={14}/> {article.author}</span>
                        </div>

                        <h2 className="text-xl font-serif font-bold text-brand-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-gold-600 transition-colors">
                            {article.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {article.excerpt}
                        </p>

                        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                            <Link 
                                to={`/updates/${article.id}`} 
                                className="inline-flex items-center text-gold-600 font-bold uppercase tracking-widest text-xs hover:text-gold-500 transition-colors group-hover:gap-2"
                            >
                                {content.updates.readMore} <ArrowRight size={14} className="ml-1"/>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {filteredArticles.length === 0 && (
            <div className="text-center py-20">
                <p className="text-slate-500 dark:text-slate-400 text-lg">No updates found in this category.</p>
                <button 
                    onClick={() => handleFilterChange('all')}
                    className="mt-4 text-gold-600 font-bold hover:underline"
                >
                    View All Updates
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Updates;
