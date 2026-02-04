import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Search, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PRACTICE_AREAS } from '../../constants';
import { PageHeader } from '../components/PageHeader';
import { SEO } from '../components/SEO';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PracticeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Logic
  const filteredAreas = PRACTICE_AREAS.filter(area => 
    area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Practice Areas"
        description="Comprehensive legal expertise across a wide spectrum of industries including Corporate, Tax, Dispute Resolution, Real Estate, and more in Cambodia."
      />
      <PageHeader 
        title="Practice Areas" 
        subtitle="Providing comprehensive legal expertise across a wide spectrum of industries and sectors." 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Search Bar Section */}
        <div className="max-w-2xl mx-auto mb-16 relative z-20">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-gold transition-colors" />
                </div>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search practice areas..."
                    className="block w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy focus:bg-white transition-all shadow-sm group-hover:shadow-md"
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-navy transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>
            <div className="mt-2 text-right">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Showing {filteredAreas.length} results
                </span>
            </div>
        </div>

        {/* Results Grid */}
        <AnimatePresence mode='wait'>
            {filteredAreas.length > 0 ? (
                <motion.div 
                    key="grid"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                {filteredAreas.map((area) => (
                    <motion.div 
                        key={area.id}
                        variants={fadeInUp}
                        layout // Enables smooth layout animations when filtering
                        className="h-full"
                    >
                        <Link 
                            to={`/practice-areas/${area.id}`}
                            className="group relative border border-gray-200 p-8 transition-all duration-300 flex flex-col h-full bg-white hover:border-brand-gold/50 hover:shadow-[0_20px_40px_-15px_rgba(180,155,103,0.3)] hover:-translate-y-2 rounded-sm overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            <div className="mb-auto">
                                <div className="mb-6 inline-flex p-3 rounded-full bg-brand-gray group-hover:bg-brand-navy transition-colors duration-300">
                                    <Scale className="h-8 w-8 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-4 leading-tight text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                                    {area.title}
                                </h3>
                                <p className="text-sm mb-6 leading-relaxed text-gray-500 line-clamp-3 group-hover:text-gray-600 transition-colors">
                                    {area.shortDescription}
                                </p>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                                View Details 
                                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-2" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
                </motion.div>
            ) : (
                <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <div className="bg-gray-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                        <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-navy mb-2">No results found</h3>
                    <p className="text-gray-500">We couldn't find any practice areas matching "{searchTerm}".</p>
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="mt-6 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors underline"
                    >
                        Clear Search
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PracticeList;