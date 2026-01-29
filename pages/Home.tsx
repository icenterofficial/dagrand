
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Scale, Shield, Users, Globe2, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Romduol from '../components/Romduol';

const Home = () => {
  const { content } = useLanguage();

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section - Luxury Style */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden">
        {/* Background Image with absolute positioning to cover top */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Law Office Architecture" 
                className="w-full h-full object-cover" 
             />
             {/* Gradient Overlay using Brand Color */}
             <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/70 to-brand-900/30"></div>
             {/* Secondary Top Overlay for Header Readability on Tablet */}
             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl animate-fade-in-up">
                <div className="inline-block border-l-4 border-gold-500 pl-4 mb-6">
                    <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Welcome to Dagrand</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
                    {content.hero.title}
                </h1>
                <p className="text-xl text-slate-200 mb-10 font-light leading-relaxed border-l border-white/20 pl-6 max-w-2xl backdrop-blur-sm">
                    {content.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                        to="/contact" 
                        className="group inline-flex items-center justify-center bg-gold-600 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-gold-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        {content.hero.cta} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                        to="/practices" 
                        className="inline-flex items-center justify-center border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-brand-900 transition-all duration-300"
                    >
                        Our Services
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Statistics Bar - Floating Effect */}
      <div className="relative z-20 -mt-20 lg:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-brand-900 dark:bg-slate-800 rounded-lg shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-b-4 border-gold-500 animate-fade-in delay-200 transition-colors duration-300 relative overflow-hidden">
             {/* Subtle Pattern */}
             <Romduol className="absolute -top-10 -right-10 w-40 h-40 text-gold-500/10 opacity-20 rotate-12" />
             
             {content.stats.map((stat, idx) => (
                 <div key={idx} className="text-center md:border-r last:border-0 border-brand-700 dark:border-slate-600 relative z-10">
                     <div className="text-3xl md:text-4xl font-bold text-gold-500 mb-1 font-serif">{stat.value}</div>
                     <div className="text-slate-300 text-xs uppercase tracking-wider">{stat.label}</div>
                 </div>
             ))}
         </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%]">
                        <Romduol className="w-full h-full text-gold-500/5 dark:text-gold-500/10 opacity-50 animate-pulse-slow" />
                    </div>
                    
                    <h2 className="text-brand-900 dark:text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 dark:text-white mb-8 leading-tight">
                        Excellence in <br/><span className="text-gold-600">Cambodian Law</span>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg relative z-10">
                        {content.about.content[0]}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed relative z-10">
                        {content.about.content[2]}
                    </p>
                    
                    <ul className="space-y-4 mb-10 relative z-10">
                        {['Multi-lingual Support', 'Corporate & Commercial Specialists', 'Registered with the Bar Association of Cambodia'].map((item, i) => (
                             <li key={i} className="flex items-center gap-3 text-brand-900 dark:text-slate-200 font-medium">
                                <CheckCircle2 className="text-gold-500" size={20}/>
                                {item}
                             </li>
                        ))}
                    </ul>

                    <Link to="/about" className="text-brand-900 dark:text-gold-400 font-bold hover:text-gold-600 dark:hover:text-white transition-colors flex items-center border-b-2 border-brand-900 dark:border-gold-400 hover:border-gold-600 pb-1 w-fit relative z-10">
                        Read full story <ArrowRight size={16} className="ml-2"/>
                    </Link>
                </div>
                <div className="order-1 lg:order-2 relative group">
                     <div className="absolute -inset-4 bg-gold-200 dark:bg-gold-900/30 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" className="w-full object-cover hover:scale-105 transition-transform duration-700" alt="Office" />
                        <div className="absolute inset-0 bg-brand-900/10 hover:bg-transparent transition-colors duration-500"></div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Practice Areas - Cards with Hover Effects */}
      <section className="py-20 bg-brand-950 text-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        <Romduol className="absolute -bottom-20 -left-20 w-96 h-96 text-white/5 rotate-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
                    <h3 className="text-4xl font-serif font-bold text-white mb-4">Comprehensive Legal Solutions</h3>
                    <p className="text-slate-400 text-lg font-light">{content.practices.subtitle}</p>
                </div>
                <Link to="/practices" className="px-6 py-3 border border-slate-600 rounded-sm hover:border-gold-500 hover:text-gold-500 transition-all text-sm font-medium tracking-wider uppercase">
                    View All Practices
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.practices.items.slice(0, 3).map((item, index) => (
                    <Link key={item.id} to={`/practices/${item.id}`} className="group relative bg-brand-900/50 p-8 rounded-lg overflow-hidden border border-brand-800 hover:border-gold-600/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 to-brand-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-800 group-hover:bg-gold-600 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 shadow-lg">
                                <Scale className="text-gold-500 group-hover:text-white" size={24}/>
                            </div>
                            <h3 className="text-xl font-serif font-semibold mb-3 text-white group-hover:text-gold-400 transition-colors">{item.title}</h3>
                            <p className="text-sm text-slate-400 mb-6 line-clamp-3 group-hover:text-slate-200">{item.shortDesc}</p>
                            <span className="text-xs font-bold uppercase tracking-wider text-gold-500 flex items-center gap-2">
                                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
