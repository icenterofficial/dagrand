
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Romduol } from '../components/Romduol';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Dagrand Law Office";
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden p-6 text-center">
      {/* Background Decor */}
      <Romduol className="absolute top-10 right-10 w-64 h-64 text-gold-500/10 rotate-45 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-900/5 rounded-full blur-3xl"></div>

      <h1 className="text-9xl font-serif font-bold text-brand-900 dark:text-white opacity-10">404</h1>
      
      <div className="relative z-10 -mt-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 dark:text-gold-500 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
                to="/" 
                className="inline-flex items-center justify-center bg-brand-900 dark:bg-white text-white dark:text-brand-900 px-6 py-3 rounded-lg font-bold hover:bg-gold-600 dark:hover:bg-gold-500 hover:text-white transition-all shadow-lg group"
            >
                <Home size={18} className="mr-2 group-hover:scale-110 transition-transform"/> Go to Homepage
            </Link>
            <Link 
                to="/contact" 
                className="inline-flex items-center justify-center border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-lg font-bold hover:border-brand-900 hover:text-brand-900 dark:hover:border-white dark:hover:text-white transition-all"
            >
                <ArrowLeft size={18} className="mr-2"/> Contact Support
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
