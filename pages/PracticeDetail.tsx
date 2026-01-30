

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronRight, Briefcase, ChevronDown, ExternalLink } from 'lucide-react';

const PracticeDetail = () => {
  const { content } = useLanguage();
  const { id } = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const practice = content.practices.items.find(p => p.id === id);

  if (!practice) {
    return <Navigate to="/practices" replace />;
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
       {/* Breadcrumb Header & Mobile Navigation Trigger */}
       <div className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-30 lg:relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
                <Link to="/practices" className="text-slate-500 dark:text-slate-400 hover:text-brand-900 dark:hover:text-white flex items-center text-sm font-medium transition-colors">
                    <ArrowLeft size={16} className="mr-2"/> <span className="hidden sm:inline">Back to Practice Areas</span><span className="sm:hidden">Back</span>
                </Link>
                
                {/* Mobile Dropdown Trigger */}
                <button 
                    onClick={toggleMobileMenu}
                    className="flex items-center gap-2 text-xs font-bold text-brand-900 dark:text-white uppercase tracking-widest lg:cursor-default"
                >
                    <span className="truncate max-w-[150px] md:max-w-none text-right">{practice.title}</span>
                    <ChevronDown 
                        size={16} 
                        className={`lg:hidden text-gold-600 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-xl border-b border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="divide-y divide-slate-100 dark:divide-slate-700 overflow-y-auto max-h-[80vh]">
                    {content.practices.items.map((item) => {
                        const isActive = item.id === id;
                        return (
                            <Link 
                                key={item.id} 
                                to={`/practices/${item.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-6 py-4 text-sm ${
                                    isActive 
                                    ? 'bg-gold-50 dark:bg-brand-900/40 text-brand-900 dark:text-gold-400 font-bold border-l-4 border-gold-500' 
                                    : 'text-slate-600 dark:text-slate-400 border-l-4 border-transparent active:bg-slate-50 dark:active:bg-slate-700'
                                }`}
                            >
                                <span>{item.title}</span>
                                {isActive && <CheckCircle size={16} className="text-gold-600" />}
                            </Link>
                        );
                    })}
                </div>
            </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* LEFT COLUMN: Main Content */}
                <div className="lg:w-2/3 order-1">
                    {/* Title Section */}
                    <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
                        <div className="inline-flex items-center gap-2 text-gold-600 font-bold uppercase tracking-wider text-xs mb-3">
                            <Briefcase size={16} />
                            <span>Practice Area</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-900 dark:text-white mb-6 leading-tight">
                            {practice.title}
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 italic font-serif">
                            {practice.shortDesc}
                        </p>
                    </div>

                    {/* Featured Image for the Section - REDUCED HEIGHT */}
                    {practice.image && (
                        <div className="mb-12 relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                            <img 
                                src={practice.image} 
                                alt={practice.title} 
                                className="w-full h-[200px] md:h-[280px] object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    )}

                    {/* Full Description */}
                    <div className="prose prose-lg text-slate-600 dark:text-slate-300 max-w-none">
                        {practice.fullDesc.map((para, i) => (
                            <p key={i} className="mb-6 leading-relaxed text-justify">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Rich Service Details (New Structure) */}
                    {practice.serviceDetails && practice.serviceDetails.length > 0 && (
                        <div className="mt-12 space-y-10">
                            <h3 className="text-2xl font-serif font-bold text-brand-900 dark:text-white border-b-2 border-gold-500 w-fit pb-2">Key Services</h3>
                            
                            <div className="grid grid-cols-1 gap-8">
                                {practice.serviceDetails.map((service, idx) => (
                                    <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="text-xl font-bold text-brand-900 dark:text-gold-500 mb-4 flex items-start gap-3">
                                            <div className="w-1 h-6 bg-gold-600 rounded-full mt-1 shrink-0"></div>
                                            {service.title}
                                        </h4>
                                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-4">
                                            {service.content.map((p, pIdx) => (
                                                <p key={pIdx}>{p}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Legacy Sub Services List (Fallback) */}
                    {!practice.serviceDetails && practice.subServices && practice.subServices.length > 0 && (
                        <div className="mt-12 bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-6 font-serif">Scope of Services</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {practice.subServices.map((service, idx) => (
                                    <div key={idx} className="flex items-start bg-white dark:bg-slate-900 p-3 rounded border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <CheckCircle size={18} className="text-gold-500 mt-0.5 mr-3 shrink-0"/>
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Box */}
                    <div className="mt-16 bg-brand-900 p-10 rounded-lg text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full opacity-10 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 font-serif">Ready to proceed?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                                    Our experts in {practice.title.toLowerCase()} are here to guide you through every step.
                                </p>
                            </div>
                            <Link 
                                to="/contact" 
                                className="whitespace-nowrap bg-gold-600 py-3 px-8 rounded text-sm font-bold hover:bg-gold-500 transition-all shadow-lg uppercase tracking-wider"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Sidebar Navigation */}
                <div className="lg:w-1/3 order-2 hidden lg:block space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden sticky top-24 transition-colors duration-300">
                        <div className="bg-brand-900 px-6 py-4 border-b border-brand-800">
                            <h3 className="text-white font-bold text-lg font-serif">Key Practices</h3>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {content.practices.items.map((item) => {
                                const isActive = item.id === id;
                                return (
                                    <Link 
                                        key={item.id} 
                                        to={`/practices/${item.id}`}
                                        className={`flex items-center justify-between px-6 py-4 text-sm transition-all duration-200 group ${
                                            isActive 
                                            ? 'bg-gold-50 dark:bg-brand-900/40 border-l-4 border-gold-500 text-brand-900 dark:text-gold-400 font-bold' 
                                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-900 dark:hover:text-white hover:pl-7 border-l-4 border-transparent'
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                        {isActive ? (
                                            <ChevronRight size={16} className="text-gold-600" />
                                        ) : (
                                            <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-brand-300" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default PracticeDetail;
