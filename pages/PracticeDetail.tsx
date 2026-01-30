
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronRight, Briefcase, ChevronDown, Camera } from 'lucide-react';

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
       
       {/* Seamless Header Hero */}
       <div className="relative bg-brand-950 pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <Link to="/practices" className="inline-flex items-center text-gold-500 hover:text-white mb-8 text-sm font-bold uppercase tracking-widest transition-colors">
                    <ArrowLeft size={16} className="mr-2"/> Back to Practice Areas
                </Link>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
                    {practice.title}
                </h1>
                <div className="h-1 w-20 bg-gold-500 rounded-full animate-fade-in-up delay-100"></div>
            </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
            {/* Mobile Sidebar Trigger (Sticky) */}
            <div className="lg:hidden sticky top-20 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md mb-8 border rounded-lg shadow-sm border-slate-100 dark:border-slate-800">
                 <button 
                    onClick={toggleMobileMenu}
                    className="w-full flex items-center justify-between px-6 py-4 text-xs font-bold text-brand-900 dark:text-white uppercase tracking-widest"
                >
                    <span>More Practice Areas</span>
                    <ChevronDown size={16} className={`text-gold-600 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileMenuOpen && (
                    <div className="border-t border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 max-h-60 overflow-y-auto">
                        {content.practices.items.map((item) => (
                            <Link 
                                key={item.id} 
                                to={`/practices/${item.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-6 py-4 text-sm ${item.id === id ? 'bg-gold-50 text-gold-600 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-2/3 order-1">
                    {/* Featured Image Section - 21:9 Aspect Ratio (Lower Height) */}
                    {practice.image && (
                        <div className="mb-12 animate-fade-in delay-200">
                            <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                                <img 
                                    src={practice.image} 
                                    alt={practice.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent"></div>
                                {/* Image Credit Label */}
                                <div className="absolute bottom-3 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-white/80 font-medium">
                                    <Camera size={10} />
                                    Source: Unsplash
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="prose prose-lg text-slate-600 dark:text-slate-300 max-w-none">
                        {practice.fullDesc.map((para, i) => (
                            <p key={i} className="mb-6 leading-relaxed text-justify">
                                {para}
                            </p>
                        ))}
                    </div>

                    {practice.serviceDetails && practice.serviceDetails.length > 0 && (
                        <div className="mt-16 space-y-10">
                            <h3 className="text-2xl font-serif font-bold text-brand-900 dark:text-white border-b-2 border-gold-500 w-fit pb-2">Key Services</h3>
                            <div className="grid grid-cols-1 gap-8">
                                {practice.serviceDetails.map((service, idx) => (
                                    <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="text-xl font-bold text-brand-900 dark:text-gold-500 mb-4 flex items-start gap-3">
                                            <div className="w-1 h-6 bg-gold-600 rounded-full mt-1 shrink-0"></div>
                                            {service.title}
                                        </h4>
                                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify space-y-4">
                                            {service.content.map((p, pIdx) => <p key={pIdx}>{p}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-20 bg-brand-900 p-10 rounded-lg text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full opacity-10 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 font-serif">Ready to proceed?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed max-w-md">Our experts are here to guide you through every step of your legal journey.</p>
                            </div>
                            <Link to="/contact" className="whitespace-nowrap bg-gold-600 py-3 px-8 rounded text-sm font-bold hover:bg-gold-500 transition-all shadow-lg uppercase tracking-wider">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 order-2 hidden lg:block space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden sticky top-28 transition-colors duration-300">
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
                                        className={`flex items-center justify-between px-6 py-4 text-sm transition-all duration-200 group ${isActive ? 'bg-gold-50 dark:bg-brand-900/40 border-l-4 border-gold-500 text-brand-900 dark:text-gold-400 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-900 dark:hover:text-white hover:pl-7 border-l-4 border-transparent'}`}
                                    >
                                        <span>{item.title}</span>
                                        <ChevronRight size={16} className={`${isActive ? 'text-gold-600' : 'text-slate-300 group-hover:text-brand-300'}`} />
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
