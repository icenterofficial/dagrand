
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Globe, Home, FileText, Users, 
  X, Moon, Sun, Type, Menu, ChevronRight,
  Scale, MessageCircle, Info, Phone, Mail, MapPin
} from 'lucide-react';
import Romduol from './Romduol';

const Layout = () => {
  const { content, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  
  const location = useLocation();
  const settingsRef = useRef<HTMLDivElement>(null);
  const isHomePage = location.pathname === '/';

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrolled(winScroll > 10);
      
      if (height > 0) {
        const scrolledPercent = (winScroll / height) * 100;
        requestAnimationFrame(() => {
          setScrollProgress(scrolledPercent);
        });
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };
  
  const cycleLang = () => {
    if (language === 'en') setLanguage('zh');
    else setLanguage('en');
  };

  const navLinks = [
    { name: content.nav.home, path: '/' },
    { name: content.nav.about, path: '/about' },
    { name: content.nav.team, path: '/team' },
    { name: content.nav.practices, path: '/practices' },
    { name: content.nav.updates, path: '/updates' },
    { name: content.nav.contact, path: '/contact' },
  ];

  const bottomNavLinks = [
    { label: content.nav.home, path: '/', icon: <Home size={18} /> },
    { label: content.nav.about, path: '/about', icon: <Info size={18} /> },
    { label: content.nav.practices, path: '/practices', icon: <Scale size={20} />, special: true },
    { label: content.nav.team, path: '/team', icon: <Users size={18} /> },
    { label: content.nav.contact, path: '/contact', icon: <MessageCircle size={18} /> },
  ];

  const getLangLabel = (l: string) => {
    if (l === 'en') return 'EN';
    return 'CN';
  };

  const getLangFull = (l: string) => {
    if (l === 'en') return 'English';
    return '中文 (Chinese)';
  };

  const showTransparentNav = isHomePage && !scrolled;

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none hidden lg:block">
        <div 
          className="h-full bg-gold-500 shadow-[0_0_8px_rgba(204,153,51,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isSettingsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsSettingsOpen(false)}
      />
      
      <div 
        ref={settingsRef}
        className={`fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-slate-900 z-[110] shadow-2xl transform transition-transform duration-500 ease-out border-l border-slate-100 dark:border-slate-800 overflow-y-auto ${isSettingsOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 pb-24">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-bold text-brand-900 dark:text-white">Preferences</h2>
                <button onClick={() => setIsSettingsOpen(false)} className="p-2 text-slate-400 hover:text-brand-900 dark:hover:text-white transition-colors">
                    <X size={24} />
                </button>
            </div>

            <div className="space-y-6">
                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Language</label>
                    <button 
                        onClick={cycleLang}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-gold-500 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <Globe size={20} className="text-gold-600" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">{getLangFull(language)}</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                    </button>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Display Theme</label>
                    <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                        <button onClick={() => setDarkMode(false)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${!darkMode ? 'bg-white shadow-md text-brand-900' : 'text-slate-500'}`}><Sun size={18} /> Light</button>
                        <button onClick={() => setDarkMode(true)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${darkMode ? 'bg-slate-700 shadow-md text-white' : 'text-slate-500'}`}><Moon size={18} /> Dark</button>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Font Size</label>
                        <span className="px-2 py-0.5 bg-gold-50 dark:bg-gold-500/10 text-[10px] font-black text-gold-600 rounded">{fontSize}%</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 flex items-center gap-4">
                        <button onClick={() => setFontSize(Math.max(85, fontSize - 5))} className="text-slate-400 hover:text-gold-600"><Type size={14} strokeWidth={3} /></button>
                        <input type="range" min="85" max="125" step="5" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-gold-600" />
                        <button onClick={() => setFontSize(Math.min(125, fontSize + 5))} className="text-slate-400 hover:text-gold-600"><Type size={22} strokeWidth={2} /></button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-500 ${!showTransparentNav ? 'bg-white/95 dark:bg-slate-900/95 shadow-md py-3 backdrop-blur-md' : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`p-2 rounded transform group-hover:rotate-12 transition-all shadow-lg ${!showTransparentNav ? 'bg-brand-900' : 'bg-white/20 backdrop-blur-md'}`}>
              <Romduol className={`w-8 h-8 ${!showTransparentNav ? 'text-gold-500' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-none transition-colors ${!showTransparentNav ? 'text-brand-900 dark:text-white' : 'text-white'}`}>DAGRAND</span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-black transition-colors ${!showTransparentNav ? 'text-slate-500' : 'text-slate-100'}`}>Law Office</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[11px] font-black uppercase tracking-[0.15em] transition-all relative py-2 group ${
                  isActive(link.path) 
                  ? 'text-gold-600' 
                  : `${!showTransparentNav ? 'text-slate-600 dark:text-slate-300' : 'text-white'} hover:text-gold-500`
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gold-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            
            <div className={`flex items-center gap-4 ml-4 pl-4 border-l ${!showTransparentNav ? 'border-slate-200 dark:border-slate-700' : 'border-white/20'}`}>
                <button 
                  onClick={cycleLang}
                  className={`flex items-center justify-center w-16 h-10 text-[13px] font-black uppercase tracking-widest rounded-md border transition-all ${
                    !showTransparentNav 
                    ? 'border-slate-200 dark:border-slate-700 text-brand-900 dark:text-white hover:border-gold-500 hover:text-gold-600 bg-slate-50/50' 
                    : 'border-white/30 text-white hover:border-white bg-white/5'
                  }`}
                >
                  {getLangLabel(language)}
                </button>
                <button 
                    onClick={() => setIsSettingsOpen(true)}
                    className={`p-2 transition-all ${!showTransparentNav ? 'text-slate-600 dark:text-slate-300 hover:scale-110' : 'text-white hover:text-gold-500'}`}
                >
                    <Menu size={24} />
                </button>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button 
                onClick={cycleLang}
                className={`flex items-center justify-center w-16 h-11 text-[13px] font-black rounded-lg border transition-all ${
                    !showTransparentNav 
                    ? 'border-slate-200 dark:border-slate-700 text-brand-900 dark:text-white bg-white shadow-sm' 
                    : 'border-white/40 text-white bg-white/10 backdrop-blur-md'
                }`}
            >
                {getLangLabel(language)}
            </button>
            <button 
                onClick={() => setIsSettingsOpen(true)}
                className={`p-2 transition-colors ${!showTransparentNav ? 'text-brand-900 dark:text-white' : 'text-white'}`}
            >
                <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      <main className={`flex-1 ${!isHomePage ? 'pt-[72px]' : 'pt-0'} pb-[70px] lg:pb-0`}>
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 z-[90] lg:hidden safe-bottom">
        <div className="grid grid-cols-5 h-[65px] items-center">
            {bottomNavLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                    <Link 
                        key={idx}
                        to={link.path}
                        className={`flex flex-col items-center justify-center transition-all ${link.special ? '-translate-y-2' : ''} ${active ? 'text-gold-600' : 'text-slate-400 dark:text-slate-500'}`}
                    >
                        <div className={`
                            relative flex items-center justify-center transition-all duration-500
                            ${link.special 
                                ? `w-11 h-11 shadow-lg rounded-full ring-2 transition-all duration-300 ${active ? 'bg-gold-600 ring-gold-500 shadow-gold-500/20 scale-110' : 'bg-brand-900 dark:bg-slate-800 ring-white dark:ring-slate-900'}` 
                                : 'p-2'
                            }
                            ${active && !link.special ? 'bg-gold-50 dark:bg-gold-500/10 text-gold-600 rounded-lg' : ''}
                        `}>
                            {link.special && (
                                <svg className="absolute inset-0 w-full h-full p-0 pointer-events-none -rotate-90" viewBox="0 0 40 40">
                                    <circle className={active ? "text-white/20" : "text-white/10"} strokeWidth="3" stroke="currentColor" fill="transparent" r={radius} cx="20" cy="20" />
                                    <circle className={active ? "text-white" : "text-gold-500"} strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={circumference - (scrollProgress / 100) * circumference} strokeLinecap="round" stroke="currentColor" fill="transparent" r={radius} cx="20" cy="20" style={{ transition: 'stroke-dashoffset 0.1s linear' }} />
                                </svg>
                            )}
                            <div className={`${link.special ? (active ? 'text-white' : 'text-gold-500') : ''}`}>
                                {link.icon}
                            </div>
                        </div>
                        <span className={`text-[8px] font-bold uppercase tracking-tight mt-1 ${link.special ? (active ? 'text-gold-600 font-black' : 'text-brand-900 dark:text-gold-500') : ''}`}>
                            {link.label}
                        </span>
                    </Link>
                );
            })}
        </div>
      </nav>

      <footer className="hidden lg:block bg-brand-950 text-white py-20 transition-colors duration-300 relative overflow-hidden">
        <Romduol className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 rotate-12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white/10 rounded backdrop-blur">
                    <Romduol className="w-10 h-10 text-gold-500" />
                </div>
                <h2 className="text-2xl font-serif font-bold tracking-tight">Dagrand Law Office</h2>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                Registered with the Bar Association of the Kingdom of Cambodia. 
                Providing expert legal services in Corporate, Tax, Labor, and Real Estate Law.
            </p>
            <div className="flex gap-4">
                 <a href="tel:+85598539910" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"><Phone size={18}/></a>
                 <a href="mailto:info@dagrand.net" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors"><Mail size={18}/></a>
            </div>
          </div>
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Quick Links</h3>
            <ul className="space-y-4 text-sm text-slate-300">
                {navLinks.map(link => (
                    <li key={link.path}><Link to={link.path} className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><ChevronRight size={12} className="text-gold-600 group-hover:translate-x-1 transition-transform"/> {link.name}</Link></li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Contact</h3>
            <ul className="space-y-6 text-sm text-slate-300">
                <li className="flex gap-4 items-start">
                    <MapPin className="text-gold-600 shrink-0" size={18} />
                    <span className="leading-relaxed">BKK1, Phnom Penh, Cambodia</span>
                </li>
                <li className="flex gap-4 items-center">
                    <Phone className="text-gold-600 shrink-0" size={18} />
                    <span>+855 (0)98 539 910</span>
                </li>
                <li className="flex gap-4 items-center">
                    <Mail className="text-gold-600 shrink-0" size={18} />
                    <span>info@dagrand.net</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} Dagrand Law Office. {content.footer.rights}
            </div>
            <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-gold-500">Privacy Policy</a>
                <a href="#" className="hover:text-gold-500">Terms of Service</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

