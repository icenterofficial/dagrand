import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRACTICE_AREAS } from '../../constants';
import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

const PracticeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const activeArea = PRACTICE_AREAS.find((p) => p.id === id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [id]);

  // If area not found, redirect to practice list or show error
  if (!activeArea) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-gray">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Practice Area Not Found</h2>
          <Link 
            to="/practice-areas" 
            className="text-brand-gold hover:text-brand-navy font-bold uppercase tracking-widest text-sm underline"
          >
            Return to List
          </Link>
        </div>
      </div>
    );
  }

  // Text formatting helper
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="text-brand-navy font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={activeArea.title}
        description={activeArea.shortDescription}
      />
      <PageHeader 
        title={activeArea.title}
        subtitle="Comprehensive legal expertise tailored to your needs." 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            
            {/* MAIN CONTENT COLUMN (Left - Spans 8 cols) */}
            <div className="lg:col-span-8">
                {/* Breadcrumbs */}
                <div className="mb-4 hidden lg:block">
                  <Breadcrumbs 
                    items={[
                      { label: "Practice Areas", path: "/practice-areas" },
                      { label: activeArea.title }
                    ]} 
                  />
                </div>

                {/* Mobile/Tablet Sticky Navigation Bar */}
                <div className="sticky top-14 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 lg:border-none lg:static lg:bg-transparent -mx-4 px-4 py-3 mb-8 lg:mb-10 lg:p-0 lg:mx-0 flex justify-between items-center shadow-sm lg:shadow-none transition-all">
                    <Link 
                        to="/practice-areas" 
                        className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-gold font-bold uppercase tracking-widest text-xs transition-colors duration-300 group"
                    >
                        <div className="p-2 rounded-full border border-brand-navy/20 group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                            <ArrowLeft className="h-4 w-4" />
                        </div>
                        <span className="hidden sm:inline">Back to Overview</span>
                        <span className="sm:hidden">Back</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setMobileMenuOpen(true)}
                        className="lg:hidden inline-flex items-center gap-2 text-brand-navy border border-brand-navy/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all bg-white"
                    >
                        <span>Topics</span>
                        <List className="h-4 w-4" />
                    </button>
                </div>

                {/* Content */}
                <Section>
                    <div className="prose prose-lg max-w-none text-gray-700 font-light leading-loose">
                        {/* Intro / Short Description as Lead */}
                        <p className="text-xl md:text-2xl text-brand-navy font-serif mb-10 border-l-4 border-brand-gold pl-6 italic">
                            {activeArea.shortDescription}
                        </p>

                        {/* Main Content */}
                        <div className="space-y-8">
                            {activeArea.fullContent.map((para, i) => (
                                <p key={i} className="text-justify">{formatText(para)}</p>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Call to Action */}
                <Section className="mt-20 pt-12 border-t border-gray-100">
                    <div className="bg-brand-gray p-8 md:p-12 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Need legal assistance in this area?</h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Our team is ready to provide the strategic guidance you need.</p>
                        <Link to="/contact" className="inline-block bg-brand-navy text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-colors shadow-lg">
                            Contact Our Team
                        </Link>
                    </div>
                </Section>
            </div>

            {/* SIDEBAR COLUMN (Right - Spans 4 cols) - Sticky for Desktop */}
            <div className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28">
                    <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-navy mb-6 pb-4 border-b border-gray-200">
                            Practice Areas
                        </h3>
                        <ul className="space-y-2">
                            {PRACTICE_AREAS.map((area) => {
                                const isActive = area.id === id;
                                return (
                                    <li key={area.id}>
                                        <Link 
                                            to={`/practice-areas/${area.id}`}
                                            className={`group flex items-center justify-between py-3 px-4 text-sm font-medium transition-all duration-300 rounded-sm ${
                                                isActive 
                                                ? 'bg-brand-navy text-white shadow-md transform translate-x-2' 
                                                : 'text-gray-600 hover:bg-white hover:text-brand-gold hover:shadow-sm hover:translate-x-1'
                                            }`}
                                        >
                                            <span className="truncate mr-2">{area.title}</span>
                                            {isActive && <ChevronRight className="h-4 w-4 text-brand-gold" />}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    
                    {/* Quick Contact Widget */}
                    <div className="mt-8 bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h4 className="font-serif font-bold text-lg mb-4">Have Questions?</h4>
                        <p className="text-sm text-gray-300 mb-6 font-light">
                            Contact us for a consultation regarding your specific legal needs.
                        </p>
                        <Link to="/contact" className="inline-block border border-brand-gold text-brand-gold px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-colors">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <div className="lg:hidden relative z-[60]">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Slide-in Menu */}
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl overflow-y-auto"
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                            <h3 className="font-serif font-bold text-xl text-brand-navy">Practice Areas</h3>
                            <button 
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-gray-400 hover:text-brand-navy transition-colors rounded-full hover:bg-gray-100"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        
                        <ul className="space-y-3">
                            {PRACTICE_AREAS.map((area) => {
                                const isActive = area.id === id;
                                return (
                                    <li key={area.id}>
                                        <Link 
                                            to={`/practice-areas/${area.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block p-4 rounded-md border transition-all duration-200 ${
                                                isActive 
                                                ? 'bg-brand-navy text-white border-brand-navy shadow-md' 
                                                : 'bg-white text-gray-700 border-gray-100 hover:border-brand-gold hover:shadow-sm'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className={`font-bold text-sm ${isActive ? 'text-white' : 'text-brand-navy'}`}>{area.title}</span>
                                                {isActive && <ChevronRight className="h-4 w-4 text-brand-gold" />}
                                            </div>
                                            <p className={`text-xs mt-2 line-clamp-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                                                {area.shortDescription}
                                            </p>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PracticeDetail;