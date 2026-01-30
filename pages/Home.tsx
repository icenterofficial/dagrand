
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useArticles } from '../context/ArticleContext';
import { ArrowRight, Scale, Shield, Users, Globe2, CheckCircle2, Quote, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Romduol from '../components/Romduol';

const Home = () => {
  const { content } = useLanguage();
  const { articles } = useArticles();
  
  // State for Testimonial Carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // State for Rotating Title
  const [titleIndex, setTitleIndex] = useState(0);

  // Set Document Title
  useEffect(() => {
    document.title = "Dagrand Law Office | Professional Legal Services in Cambodia";
  }, []);

  // Title Configuration
  const rotatingTitles = [
    { text: "Dagrand Law Office", font: "font-serif text-5xl md:text-7xl", lang: "en" },
    { text: "ការិយាល័យមេធាវី តាហ្គែន", font: "font-khmer font-bold leading-relaxed py-2 text-5xl md:text-7xl", lang: "km" },
    { text: "Cabinet d'Avocats Dagrand", font: "font-serif text-4xl md:text-6xl", lang: "fr" },
    { text: "柬埔寨达观律师事务所", font: "font-chinese text-5xl md:text-7xl", lang: "zh" }
  ];

  // Auto-slide logic for Testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % content.testimonials.items.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [content.testimonials.items.length]);

  // Auto-rotate logic for Hero Title
  useEffect(() => {
    const titleInterval = setInterval(() => {
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(titleInterval);
  }, []);

  // Get top 3 articles
  const recentArticles = articles.slice(0, 3);

  // Get top 2 partners
  const partners = content.team.members.slice(0, 2);

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
             <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/40"></div>
             {/* Secondary Top Overlay for Header Readability on Tablet */}
             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl animate-fade-in-up">
                <div className="inline-block border-l-4 border-gold-500 pl-4 mb-6">
                    <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Welcome to Dagrand</span>
                </div>
                
                {/* Rotating Title */}
                <div className="h-24 md:h-32 mb-6 flex items-center">
                    <h1 
                        key={titleIndex} 
                        className={`font-bold text-white leading-[1.2] drop-shadow-lg animate-fade-in-up ${rotatingTitles[titleIndex].font}`}
                    >
                        {rotatingTitles[titleIndex].text}
                    </h1>
                </div>

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
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
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

      {/* NEW: Leadership / Partners Section */}
      <section className="py-24 bg-brand-50 dark:bg-slate-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-3">Our Leadership</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 dark:text-white">Meet The Partners</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {partners.map((partner) => (
                    <div key={partner.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group border border-slate-100 dark:border-slate-800">
                        <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                            <img 
                                src={partner.image} 
                                alt={partner.name} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-8 md:w-3/5 flex flex-col justify-center">
                            <span className="text-gold-600 font-bold uppercase tracking-wider text-xs mb-2">{partner.role}</span>
                            <h4 className="text-2xl font-serif font-bold text-brand-900 dark:text-white mb-2">{partner.name}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                {partner.bio[0]}
                            </p>
                            <Link to="/team" className="text-brand-900 dark:text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-gold-600 transition-colors mt-auto">
                                View Profile <ChevronRight size={14} className="text-gold-500"/>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-brand-950 text-white relative">
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

      {/* NEW: Latest Insights / News */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                 <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-brand-900 dark:text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Legal Updates</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 dark:text-white">Latest Insights</h3>
                 </div>
                 <Link to="/updates" className="text-brand-900 dark:text-white hover:text-gold-600 font-bold border-b border-gold-500 pb-1">View All Updates</Link>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {recentArticles.map(article => (
                     <div key={article.id} className="group flex flex-col h-full bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700">
                         <div className="relative h-48 overflow-hidden">
                             <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                             <div className="absolute top-3 left-3 bg-white/90 dark:bg-brand-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-brand-900 dark:text-white shadow-sm">
                                 {article.category}
                             </div>
                         </div>
                         <div className="p-6 flex-1 flex flex-col">
                             <div className="text-xs text-slate-400 mb-3 flex items-center gap-2">
                                <Calendar size={12}/> {article.date}
                             </div>
                             <h4 className="text-lg font-serif font-bold text-brand-900 dark:text-white mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">{article.title}</h4>
                             <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-1">{article.excerpt}</p>
                             <Link to={`/updates/${article.id}`} className="text-gold-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
                                Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform"/>
                             </Link>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* NEW: Testimonials / Trust (AUTO SLIDE ENABLED) */}
      <section className="py-24 bg-brand-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
             <Quote size={48} className="text-gold-500 mx-auto mb-8 opacity-50"/>
             
             {/* Key ensures animation triggers on change */}
             <div key={activeTestimonial} className="animate-fade-in">
                 <h2 className="text-white font-serif text-3xl md:text-4xl font-bold mb-12 leading-tight">
                     "{content.testimonials.items[activeTestimonial].quote}"
                 </h2>
                 <div>
                     <p className="text-gold-400 font-bold uppercase tracking-widest text-sm">{content.testimonials.items[activeTestimonial].author}</p>
                     <p className="text-slate-400 text-xs mt-1">{content.testimonials.items[activeTestimonial].role}</p>
                 </div>
             </div>

             <div className="flex justify-center gap-2 mt-12">
                 {content.testimonials.items.map((_, idx) => (
                     <button 
                        key={idx} 
                        onClick={() => setActiveTestimonial(idx)}
                        className={`transition-all duration-300 rounded-full h-2 ${idx === activeTestimonial ? 'bg-gold-500 w-8' : 'bg-slate-600 w-2 hover:bg-slate-500'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                     />
                 ))}
             </div>
         </div>
      </section>

      {/* NEW: CTA Section */}
      <section className="py-20 bg-brand-50 dark:bg-slate-800 border-t border-brand-100 dark:border-slate-700 relative overflow-hidden">
         <Romduol className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 text-brand-900/5 dark:text-white/5 rotate-12 pointer-events-none" />
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 dark:text-white mb-6">
                {content.ctaSection.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                {content.ctaSection.subtitle}
            </p>
            <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-brand-900 dark:bg-white text-white dark:text-brand-900 px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase hover:bg-gold-600 dark:hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-xl"
            >
                {content.ctaSection.buttonText} <ArrowRight size={18} className="ml-2" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;
