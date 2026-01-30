
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { usePWA } from '../context/PWAContext.tsx';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Globe, Home, FileText, Users, 
  X, Moon, Sun, Type, Menu, ChevronRight,
  Shield, Download, Smartphone, Briefcase, Phone, Plus, Minus
} from 'lucide-react';

import { Romduol } from './Romduol.tsx';
import PWAInstallModal from './PWAInstallModal.tsx';

const Layout = () => {
  const { content, language, setLanguage } = useLanguage();
  const { isInstallable, installApp } = usePWA();
  const [scrolled, setScrolled] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  
  const location = useLocation();
  const settingsRef = useRef<HTMLDivElement>(null);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const cycleLang = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { name: content.nav.home, path: '/' },
    { name: content.nav.about, path: '/about' },
    { name: content.nav.team, path: '/team' },
    { name: content.nav.practices, path: '/practices' },
    { name: content.nav.updates, path: '/updates' },
    { name: content.nav.contact, path: '/contact' },
  ];

  const adjustFontSize = (delta: number) => {
    setFontSize(prev => Math.min(130, Math.max(90, prev + delta)));
  };

  // Shared Language Toggle Component (Supports 2 languages: EN and ZH)
  const LanguageSwitcher = ({ isScrolled }: { isScrolled: boolean }) => (
    <div className={`flex items-center bg-black/10 dark:bg-white/5 rounded-full p-1 border ${isScrolled ? 'border-slate-200 dark:border-slate-800' : 'border-white/10'}`}>
      <button 
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'en' ? 'bg-gold-500 text-white shadow-sm' : (isScrolled ? 'text-slate-500 dark:text-slate-400' : 'text-white/60')}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'zh' ? 'bg-gold-500 text-white shadow-sm' : (isScrolled ? 'text-slate-500 dark:text-slate-400' : 'text-white/60')}`}
      >
        中文
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      
      <PWAInstallModal />

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isSettingsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsSettingsOpen(false)}
      />
      
      {/* Settings Drawer */}
      <div 
        ref={settingsRef}
        className={`fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 z-[110] shadow-2xl transform transition-transform duration-500 ease-out border-l border-slate-100 dark:border-slate-800 overflow-y-auto ${isSettingsOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 min-h-full flex flex-col">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-serif font-bold text-brand-950 dark:text-white">Preferences</h2>
                <button onClick={() => setIsSettingsOpen(false)} className="p-2 text-slate-400 hover:text-brand-900 dark:hover:text-white">
                    <X size={24} />
                </button>
            </div>

            <div className="space-y-8 flex-1">
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Language</label>
                    <button onClick={cycleLang} className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-gold-500 transition-all">
                        <div className="flex items-center gap-3">
                            <Globe size={20} className="text-gold-500" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">
                                {language === 'en' ? 'English' : '中文 (Chinese)'}
                            </span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                    </button>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Text Size</label>
                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <button onClick={() => adjustFontSize(-5)} className="p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-brand-950 dark:text-white hover:bg-gold-500 hover:text-white transition-all disabled:opacity-30" disabled={fontSize <= 90}><Minus size={18} /></button>
                        <div className="flex-1 text-center font-bold text-brand-950 dark:text-white">{fontSize}%</div>
                        <button onClick={() => adjustFontSize(5)} className="p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-brand-950 dark:text-white hover:bg-gold-500 hover:text-white transition-all disabled:opacity-30" disabled={fontSize >= 130}><Plus size={18} /></button>
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Display</label>
                    <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                        <button onClick={() => setDarkMode(false)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${!darkMode ? 'bg-white shadow-md text-brand-950' : 'text-slate-500'}`}><Sun size={18} /> Light</button>
                        <button onClick={() => setDarkMode(true)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${darkMode ? 'bg-slate-700 shadow-md text-white' : 'text-slate-500'}`}><Moon size={18} /> Dark</button>
                    </div>
                </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-100 dark:border-slate-800">
                <Link to="/admin" onClick={() => setIsSettingsOpen(false)} className="flex items-center gap-3 text-slate-400 hover:text-brand-950 text-sm font-medium transition-colors">
                    <Shield size={16} /> Admin Portal
                </Link>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md py-3 lg:py-4 border-b border-slate-200 dark:border-slate-800' 
          : 'bg-transparent py-5 lg:py-8 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className={`p-2 rounded bg-brand-950 shadow-lg`}>
              <Romduol className="w-8 h-8 text-gold-500" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl lg:text-2xl leading-none ${scrolled ? 'text-brand-950 dark:text-white' : 'text-white'}`}>DAGRAND</span>
              <span className={`text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-black ${scrolled ? 'text-slate-500' : 'text-slate-200'}`}>Law Office</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 border-r border-slate-200 dark:border-slate-800 pr-6 mr-1">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-[11px] lg:text-[12px] font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === link.path 
                    ? 'text-gold-500' 
                    : (scrolled ? 'text-slate-600 dark:text-slate-300 hover:text-gold-500' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSwitcher isScrolled={scrolled} />
              <button 
                  onClick={() => setIsSettingsOpen(true)}
                  className={`p-2 rounded-full transition-colors ${scrolled ? 'text-brand-950 dark:text-white hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                  <Menu size={24} />
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher isScrolled={scrolled} />
            <button onClick={() => setIsSettingsOpen(true)} className={`p-1.5 ${scrolled ? 'text-brand-950 dark:text-white' : 'text-white'}`}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area - No top padding, pages will handle it */}
      <main className="flex-1" style={{ fontSize: `${fontSize}%` }}>
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 lg:hidden z-50 safe-bottom">
        <div className="grid grid-cols-5 h-16">
            {[
                { icon: Home, label: 'Home', path: '/' },
                { 
                  // Fix: Ensure the custom icon is a function that accepts props for consistent usage.
                  icon: (props: any) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
                  ), 
                  label: 'Practice', 
                  path: '/practices' 
                },
                { icon: FileText, label: 'Updates', path: '/updates' },
                { icon: Users, label: 'Team', path: '/team' },
                { icon: Phone, label: 'Contact', path: '/contact' }
            ].map((item, idx) => {
                const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                // Fix: Assign to a capitalized variable and ensure it is treated as a component to fix TS errors and runtime issues.
                const IconComponent = item.icon as any;
                return (
                    <Link key={idx} to={item.path} className={`flex flex-col items-center justify-center gap-1 ${active ? 'text-gold-500' : 'text-slate-400'}`}>
                        <IconComponent size={20} strokeWidth={active ? 2.5 : 2} />
                        <span className="text-[9px] font-bold uppercase">{item.label}</span>
                    </Link>
                );
            })}
        </div>
      </nav>

      {/* Footer */}
      <footer className="hidden lg:block bg-brand-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <Romduol className="w-8 h-8 text-gold-500" />
                    <span className="text-xl font-serif font-bold">Dagrand Law Office</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                    Professionalism. Integrity. Efficiency. <br/>
                    Registered with the Bar Association of the Kingdom of Cambodia.
                </p>
            </div>
            <div>
                <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Practice Areas</h4>
                <ul className="grid grid-cols-1 gap-3 text-sm text-slate-400">
                    {content.practices.items.slice(0, 5).map(p => <li key={p.id}>{p.title}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-6">Office</h4>
                <p className="text-sm text-slate-400 mb-2">Phnom Penh, Cambodia</p>
                <p className="text-sm text-slate-400 mb-6">+855 (0)98 539 910</p>
                <Link to="/contact" className="inline-block border border-gold-500 text-gold-500 px-6 py-2 rounded text-xs font-bold uppercase hover:bg-gold-500 hover:text-white transition-all">Get in Touch</Link>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-[10px] text-slate-500 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Dagrand Law Office. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
