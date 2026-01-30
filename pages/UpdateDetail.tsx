
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useArticles } from '../context/ArticleContext';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Tag, Clock, X, Check, Copy, Facebook, Linkedin, Twitter, Send } from 'lucide-react';
import { Romduol } from '../components/Romduol';

const UpdateDetail = () => {
  const { content } = useLanguage();
  const { articles } = useArticles();
  const { id } = useParams();
  
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const article = articles.find(a => a.id === id);

  if (!article) return <Navigate to="/updates" replace />;

  const categoryLabel = (content.updates.categories as any)[article.category] || article.category;
  const shareUrl = window.location.href;
  const shareTitle = article.title;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialPlatforms = [
      { name: 'Facebook', icon: <Facebook size={20}/>, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, color: 'bg-[#1877F2]' },
      { name: 'Telegram', icon: <Send size={20}/>, url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, color: 'bg-[#229ED9]' },
      { name: 'LinkedIn', icon: <Linkedin size={20}/>, url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, color: 'bg-[#0077B5]' },
      { name: 'Twitter', icon: <Twitter size={20}/>, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, color: 'bg-[#1DA1F2]' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300 pb-20">
       {/* Seamless Dark Header Header */}
       <div className="relative bg-brand-950 pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            <div className="max-w-4xl mx-auto px-6 w-full relative z-10 text-center lg:text-left">
                <Link to="/updates" className="inline-flex items-center text-gold-400 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors">
                    <ArrowLeft size={16} className="mr-2"/> Back to Updates
                </Link>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white/80 text-sm font-medium mb-4">
                    <div className="bg-gold-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{categoryLabel}</div>
                    <span className="flex items-center gap-2"><Calendar size={16} className="text-gold-500"/> {article.date}</span>
                    <span className="flex items-center gap-2"><Clock size={16} className="text-gold-500"/> 5 min read</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight animate-fade-in-up">
                    {article.title}
                </h1>
            </div>
       </div>

       <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-8 md:p-16 border-t-8 border-gold-500 relative overflow-hidden">
                <Romduol className="absolute top-0 right-0 w-96 h-96 text-gold-500/5 rotate-12 pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-brand-900 dark:text-white font-bold text-xl">{article.author[0]}</div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Written by</p>
                            <p className="text-brand-900 dark:text-white font-serif font-bold">{article.author}</p>
                        </div>
                    </div>
                    <button onClick={() => setIsShareOpen(true)} className="text-slate-400 hover:text-gold-600 transition-colors p-3 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"><Share2 size={24} /></button>
                </div>

                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <p className="text-xl font-serif text-brand-900 dark:text-white italic leading-relaxed border-l-4 border-gold-500 pl-6 mb-10">{article.excerpt}</p>
                    {article.content.map((paragraph, idx) => <p key={idx} className="mb-6 leading-8 text-slate-700 dark:text-slate-300 text-justify">{paragraph}</p>)}
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <Tag size={18} className="text-gold-500" />
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Category: {categoryLabel}</span>
                </div>
            </div>
       </div>

       {isShareOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsShareOpen(false)}></div>
               <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md relative z-10 animate-fade-in-up border border-slate-100 dark:border-slate-800">
                   <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                       <h3 className="font-serif font-bold text-xl text-brand-900 dark:text-white">Share Article</h3>
                       <button onClick={() => setIsShareOpen(false)} className="text-slate-400 hover:text-brand-900"><X size={24}/></button>
                   </div>
                   <div className="p-8">
                       <div className="flex justify-center gap-6 mb-8">
                           {socialPlatforms.map((p) => <a key={p.name} href={p.url} target="_blank" rel="noopener" className={`w-12 h-12 rounded-full ${p.color} flex items-center justify-center text-white hover:scale-110 shadow-lg transition-transform`}>{p.icon}</a>)}
                       </div>
                       <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg flex items-center justify-between border border-slate-200 dark:border-slate-700">
                           <div className="truncate text-[10px] text-slate-500 px-3 flex-1">{shareUrl}</div>
                           <button onClick={handleCopyLink} className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${copied ? 'bg-green-500 text-white' : 'bg-brand-900 text-white'}`}>{copied ? <Check size={14}/> : 'Copy'}</button>
                       </div>
                   </div>
               </div>
           </div>
       )}
    </div>
  );
};

export default UpdateDetail;
