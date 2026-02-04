import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, MapPin, Phone, Mail, Clock, Linkedin, ChevronRight, Globe2, Settings, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { InstallPWA } from './InstallPWA';
import { FloatingContact } from './FloatingContact';

const SettingsPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { theme, toggleTheme, fontSize, setFontSize } = useTheme();
  
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-14 right-0 w-72 bg-white dark:bg-[#0f2b4a] border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl p-5 z-50 overflow-hidden"
    >
      <div className="flex items-center justify-between mb-6">
         <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Display Settings</span>
         <button onClick={onClose} className="text-gray-400 hover:text-brand-gold transition-colors">
            <X className="h-4 w-4" />
         </button>
      </div>

      {/* Theme Toggle - Clean Segmented Control */}
      <div className="bg-gray-100 dark:bg-black/20 p-1 rounded-xl flex items-center relative mb-6">
          {/* Active Slider Background */}
          <motion.div 
            layout
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-brand-navy shadow-sm rounded-lg"
            initial={false}
            animate={{ x: theme === 'dark' ? '100%' : '0%' }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
          
          <button 
            onClick={() => theme === 'dark' && toggleTheme()}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg relative z-10 text-sm font-bold transition-colors ${theme === 'light' ? 'text-brand-navy' : 'text-gray-500 dark:text-gray-400'}`}
          >
             <Sun className="h-4 w-4" /> Light
          </button>
          <button 
            onClick={() => theme === 'light' && toggleTheme()}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg relative z-10 text-sm font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}
          >
             <Moon className="h-4 w-4" /> Dark
          </button>
      </div>

      {/* Font Size - Visual 'Aa' Scale (Cleaner than buttons) */}
      <div>
         <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-brand-navy dark:text-white">Text Size</span>
            <span className="text-xs text-gray-400">{fontSize === 'normal' ? 'Default' : fontSize === 'large' ? '115%' : '130%'}</span>
         </div>
         
         <div className="flex items-center justify-between bg-gray-100 dark:bg-black/20 rounded-xl px-2 py-2">
             <button 
               onClick={() => setFontSize('normal')}
               className={`w-full h-10 flex items-center justify-center rounded-lg transition-all ${fontSize === 'normal' ? 'bg-white dark:bg-brand-gold shadow-sm text-brand-navy dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
             >
               <span className="text-sm font-bold">Aa</span>
             </button>
             
             <div className="h-4 w-[1px] bg-gray-300 dark:bg-white/10 mx-1"></div>

             <button 
               onClick={() => setFontSize('large')}
               className={`w-full h-10 flex items-center justify-center rounded-lg transition-all ${fontSize === 'large' ? 'bg-white dark:bg-brand-gold shadow-sm text-brand-navy dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
             >
               <span className="text-lg font-bold">Aa</span>
             </button>

             <div className="h-4 w-[1px] bg-gray-300 dark:bg-white/10 mx-1"></div>

             <button 
               onClick={() => setFontSize('xl')}
               className={`w-full h-10 flex items-center justify-center rounded-lg transition-all ${fontSize === 'xl' ? 'bg-white dark:bg-brand-gold shadow-sm text-brand-navy dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
             >
               <span className="text-xl font-bold">Aa</span>
             </button>
         </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme, fontSize, setFontSize } = useTheme();
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close setting popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('team'), path: '/team' },
    { name: t('practice'), path: '/practice-areas' },
    { name: t('updates'), path: '/updates' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className={`absolute inset-0 bg-brand-navy dark:bg-brand-dark transition-opacity duration-300 ${scrolled ? 'opacity-95' : 'opacity-0 bg-gradient-to-b from-brand-navy/90 to-transparent'}`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="bg-white/10 p-2 rounded-full border border-white/20 group-hover:border-brand-gold group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                 <Scale className="h-6 w-6 text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-brand-gold transition-colors duration-300">DAGRAND</span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                      active ? 'text-brand-gold' : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold transform origin-center transition-transform duration-300 ease-out ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                );
              })}
              
              {/* Language Switcher */}
              <div className="h-6 w-[1px] bg-gray-500/50 mx-2"></div>
              <button
                onClick={() => setLanguage(language === 'en' ? 'cn' : 'en')}
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-brand-gold transition-all duration-300 border border-white/20 px-3 py-1.5 rounded-full hover:bg-white/10 hover:border-brand-gold active:scale-95"
              >
                <Globe2 className="h-4 w-4" />
                <span>{language === 'en' ? 'EN' : 'CN'}</span>
              </button>

              {/* Settings Trigger for Desktop */}
              <div className="relative" ref={settingsRef}>
                  <button
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isSettingsOpen ? 'bg-brand-gold text-white rotate-90' : 'text-white/80 hover:bg-white/10 hover:text-brand-gold'}`}
                  >
                    <Settings className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                     {isSettingsOpen && <SettingsPopup isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />}
                  </AnimatePresence>
              </div>

            </div>
          </div>
          <div className="-mr-2 flex lg:hidden items-center gap-4">
             {/* Mobile Language Switcher */}
            <button
                onClick={() => setLanguage(language === 'en' ? 'cn' : 'en')}
                className="flex items-center gap-1 text-xs font-bold text-white border border-white/20 px-2 py-1 rounded hover:bg-white/10"
              >
                {language === 'en' ? 'EN' : 'CN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navy dark:bg-brand-dark border-t border-brand-gold/20 relative z-20 overflow-hidden shadow-2xl"
          >
            {/* 
              SCROLLBAR LEFT HACK: 
              1. Outer div has [direction:rtl] to flip the scrollbar to left.
              2. Inner div has [direction:ltr] to flip content back to normal reading direction.
            */}
            <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto [direction:rtl]">
                <div className="[direction:ltr] flex flex-col min-h-full">
                    <div className="px-4 pt-4 space-y-2">
                    {navLinks.map((link) => {
                        const active = isActive(link.path);
                        return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block px-4 py-3.5 rounded-lg text-lg font-medium transition-all duration-200 ${
                            active 
                            ? 'text-brand-gold bg-white/10' 
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {link.name}
                        </Link>
                        );
                    })}
                    </div>

                    {/* Mobile Settings Control (Bottom) - Redesigned as Modern Compact Cards */}
                    <div className="mt-auto px-4 py-6 border-t border-white/5 bg-black/20 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-3">
                            {/* Theme Toggle Button Card - Compact */}
                            <button 
                                onClick={toggleTheme}
                                className="flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3 active:scale-95 transition-all hover:bg-white/10"
                            >
                                <div className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-brand-gold text-white shadow-[0_0_10px_rgba(180,155,103,0.4)]' : 'bg-gray-700 text-gray-300'}`}>
                                    {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                                </div>
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                                </span>
                            </button>

                            {/* Font Size Toggle Button Card - Compact */}
                            <button 
                                onClick={() => {
                                    const next = fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xl' : 'normal';
                                    setFontSize(next);
                                }}
                                className="flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3 active:scale-95 transition-all hover:bg-white/10"
                            >
                                <div className="flex items-end gap-1 text-brand-gold h-6 pb-0.5">
                                    <span className={`font-serif font-bold leading-none transition-all duration-300 ${fontSize === 'normal' ? 'text-lg text-brand-gold' : 'text-xs text-gray-500'}`}>A</span>
                                    <span className={`font-serif font-bold leading-none transition-all duration-300 ${fontSize === 'large' ? 'text-xl text-brand-gold' : 'text-sm text-gray-500'}`}>A</span>
                                    <span className={`font-serif font-bold leading-none transition-all duration-300 ${fontSize === 'xl' ? 'text-2xl text-brand-gold' : 'text-base text-gray-500'}`}>A</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                                    Text Size: <span className="text-brand-gold">{fontSize === 'normal' ? 'Std' : fontSize === 'large' ? 'Lg' : 'XL'}</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-dark text-gray-400 pt-16 pb-8 border-t border-brand-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Column 1: Brand */}
              <div className="space-y-6">
                  <div className="flex items-center gap-3 group">
                      <Scale className="h-6 w-6 text-brand-gold group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-serif text-xl font-bold text-white tracking-wider group-hover:text-brand-gold transition-colors">DAGRAND</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                      A boutique firm registered with the Bar Association of the Kingdom of Cambodia, dedicated to delivering high-quality legal services.
                  </p>
                  <div className="flex gap-4">
                      <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="bg-brand-navy p-2 rounded-full hover:bg-brand-gold hover:text-brand-navy hover:-translate-y-1 transition-all duration-300 shadow-md">
                          <Linkedin className="h-4 w-4" />
                      </a>
                  </div>
              </div>

              {/* Column 2: Links */}
              <div>
                  <h3 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h3>
                  <ul className="space-y-3 text-sm">
                      {[
                          { name: t('home'), path: '/' },
                          { name: t('about'), path: '/about' },
                          { name: t('team'), path: '/team' },
                          { name: t('practice'), path: '/practice-areas' },
                      ].map((link) => (
                          <li key={link.path}>
                              <Link to={link.path} className="flex items-center gap-2 hover:text-brand-gold hover:translate-x-1 transition-all duration-300">
                                  <ChevronRight className="h-3 w-3 text-brand-gold" />
                                  {link.name}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Column 3: Contact */}
              <div className="lg:col-span-2">
                  <h3 className="text-white font-serif font-bold text-lg mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-4">
                          <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                              <span>{CONTACT_INFO.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <Clock className="h-5 w-5 text-brand-gold shrink-0" />
                              <span>{CONTACT_INFO.businessHours}</span>
                          </div>
                      </div>
                      <div className="space-y-4">
                          <div className="flex items-start gap-3">
                              <Phone className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                              <div className="flex flex-col gap-1">
                                  {CONTACT_INFO.phones.map((phone, idx) => (
                                      <span key={idx} className="hover:text-white transition-colors cursor-default"><span className="text-xs text-gray-500 mr-2 uppercase">{phone.label}:</span>{phone.number}</span>
                                  ))}
                              </div>
                          </div>
                          <div className="flex items-center gap-3">
                              <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors underline decoration-transparent hover:decoration-brand-gold underline-offset-4 duration-300">{CONTACT_INFO.email}</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} Dagrand Law Office. All rights reserved.</p>
              <div className="flex gap-6">
                  <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
                  <Link to="/admin" className="hover:text-brand-gold cursor-pointer transition-colors">Admin Login</Link>
              </div>
          </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    // We use scrollYProgress directly.
    // const { scrollYProgress } = useScroll();
    // const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-brand-dark transition-colors duration-300 selection:bg-brand-gold/30 relative">
            <InstallPWA />
            <FloatingContact />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};