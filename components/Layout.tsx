
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePWA } from '../context/PWAContext';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Globe, Home, FileText, Users, 
  X, Moon, Sun, Type, Menu, ChevronRight,
  MessageCircle, Info, Phone, Mail, MapPin, Shield, Download, Smartphone
} from 'lucide-react';

import Romduol from './Romduol';
import PWAInstallModal from './PWAInstallModal';

// Dynamic Navigation Icon Component
const NavIcon = ({ name, active, isSpecial }: { name: string, active: boolean, isSpecial?: boolean }) => {
    // Inactive Style: Stroke Only (User requested: stroke width 1.25, round caps/joins)
    const lineClass = "fill-none stroke-current stroke-[1.25] stroke-linecap-round stroke-linejoin-round";
    
    // Active Style: Filled Main Shape
    const activeBase = "fill-current stroke-none";
    
    // Cutout Style: Used for details inside filled shapes (e.g., lines, dots)
    // For Floating Button (Special): Background is Gold, Icon is White -> Cutout should match Gold BG
    // For Standard Item: Background is White/Dark, Icon is Gold -> Cutout should match Page BG
    const cutoutClass = isSpecial 
        ? "stroke-gold-600 dark:stroke-gold-600 stroke-[1.5] stroke-linecap-round stroke-linejoin-round" 
        : "stroke-white dark:stroke-slate-900 stroke-[1.5] stroke-linecap-round stroke-linejoin-round";

    // Specific handling for dot strokes which act as fills when cap is round
    const dotCutoutClass = isSpecial
         ? "stroke-gold-600 dark:stroke-gold-600 stroke-[2] stroke-linecap-round"
         : "stroke-white dark:stroke-slate-900 stroke-[2] stroke-linecap-round";

    switch(name) {
        case 'home':
            return (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    {/* Door Line - Cutout when active */}
                    <path d='M12 18V15' className={active ? cutoutClass : lineClass}></path>
                    {/* House Body - Fill when active */}
                    <path d='M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z' className={active ? activeBase : lineClass}></path>
                </svg>
            );
        case 'about':
            return (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    {/* Document Body */}
                    <path d='M10.75 2.44995C11.45 1.85995 12.58 1.85995 13.26 2.44995L14.84 3.79995C15.14 4.04995 15.71 4.25995 16.11 4.25995H17.81C18.87 4.25995 19.74 5.12995 19.74 6.18995V7.88995C19.74 8.28995 19.95 8.84995 20.2 9.14995L21.55 10.7299C22.14 11.4299 22.14 12.5599 21.55 13.2399L20.2 14.8199C19.95 15.1199 19.74 15.6799 19.74 16.0799V17.7799C19.74 18.8399 18.87 19.7099 17.81 19.7099H16.11C15.71 19.7099 15.15 19.9199 14.85 20.1699L13.27 21.5199C12.57 22.1099 11.44 22.1099 10.76 21.5199L9.18001 20.1699C8.88001 19.9199 8.31 19.7099 7.92 19.7099H6.17C5.11 19.7099 4.24 18.8399 4.24 17.7799V16.0699C4.24 15.6799 4.04 15.1099 3.79 14.8199L2.44 13.2299C1.86 12.5399 1.86 11.4199 2.44 10.7299L3.79 9.13995C4.04 8.83995 4.24 8.27995 4.24 7.88995V6.19995C4.24 5.13995 5.11 4.26995 6.17 4.26995H7.9C8.3 4.26995 8.86 4.05995 9.16 3.80995L10.75 2.44995Z' className={active ? activeBase : lineClass}></path>
                    {/* Exclamation Line */}
                    <path d='M12 8.13V12.96' className={active ? cutoutClass : lineClass}></path>
                    {/* Exclamation Dot */}
                    <path d='M11.9945 16H12.0035' className={active ? dotCutoutClass : lineClass}></path>
                </svg>
            );
        case 'team':
            return (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    {/* Left Person Body */}
                    <path d='M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z' className={active ? activeBase : lineClass}></path>
                    {/* Right Person Head */}
                    <path d='M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11' className={active ? activeBase : lineClass}></path>
                    {/* Left Person Body */}
                    <path d='M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z' className={active ? activeBase : lineClass}></path>
                    {/* Right Person Body */}
                    <path d='M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14' className={active ? (isSpecial ? "stroke-white dark:stroke-slate-900 stroke-[1.5] fill-none" : "stroke-gold-600 stroke-[1.5] fill-none") : lineClass}></path>
                </svg>
            );
        case 'contact':
             return (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    {/* Main Bubble */}
                    <path d='M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z' strokeMiterlimit='10' className={active ? activeBase : lineClass}></path>
                    {/* Secondary Bubble */}
                    <path d='M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z' strokeMiterlimit='10' className={active ? (activeBase + " opacity-50") : lineClass}></path>
                    {/* Dots */}
                    <path d='M13.4955 13.25H13.5045' className={active ? dotCutoutClass : lineClass}></path>
                    <path d='M9.9955 13.25H10.0045' className={active ? dotCutoutClass : lineClass}></path>
                    <path d='M6.4955 13.25H6.5045' className={active ? dotCutoutClass : lineClass}></path>
                </svg>
             );
        case 'practices':
             return (
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                    {/* Rod - Line (Always Stroke) */}
                    <path d="M12 3v18" className={lineClass}></path>
                    {/* Right Pan - Shape (Fill when active) */}
                    <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" className={active ? activeBase : lineClass}></path>
                    {/* Beam - Line (Always Stroke) */}
                    <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" className={lineClass}></path>
                    {/* Left Pan - Shape (Fill when active) */}
                    <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" className={active ? activeBase : lineClass}></path>
                    {/* Base - Line (Always Stroke) */}
                    <path d="M7 21h10" className={lineClass}></path>
                </svg>
             );
        default:
            return null;
    }
}

const Layout = () => {
  const { content, language, setLanguage } = useLanguage();
  const { isInstallable, installApp } = usePWA();
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

  // Updated Font Size Logic: Affects ONLY text classes, not layout
  useEffect(() => {
    // 1. Reset root font size to avoid layout breakage (just in case it was set previously)
    document.documentElement.style.removeProperty('font-size');

    // 2. Calculate the multiplier
    const scale = fontSize / 100;

    // 3. Define Tailwind text class base sizes (in rem)
    const sizes: {[key: string]: number} = {
      '.text-xs': 0.75,
      '.text-sm': 0.875,
      '.text-base': 1,
      '.text-lg': 1.125,
      '.text-xl': 1.25,
      '.text-2xl': 1.5,
      '.text-3xl': 1.875,
      '.text-4xl': 2.25,
      '.text-5xl': 3,
      '.text-6xl': 3.75,
      '.text-7xl': 4.5
    };

    let styleContent = '';

    // 4. Generate CSS overrides
    Object.entries(sizes).forEach(([selector, rem]) => {
       const newRem = rem * scale;
       // Use relative line-height to ensure text doesn't overlap when scaled, 
       // but strictly avoid changing container dimensions derived from 'rem'
       const lineHeight = rem > 1.5 ? '1.2' : '1.6'; 
       styleContent += `${selector} { font-size: ${newRem}rem !important; line-height: ${lineHeight} !important; } `;
    });

    // 5. Inject styles
    let styleTag = document.getElementById('text-scaler-style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'text-scaler-style';
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = styleContent;

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

  // Configuration for Bottom Nav
  const bottomNavLinks = [
    { label: "Home", path: '/', icon: 'home' },
    { label: "About", path: '/about', icon: 'about' },
    { label: "Practice", path: '/practices', icon: 'practices', special: true },
    { label: "Team", path: '/team', icon: 'team' },
    { label: "Contact", path: '/contact', icon: 'contact' },
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
      
      {/* PWA Install Modal */}
      <PWAInstallModal />

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
                
                {/* PWA Install Button (Only if installable) */}
                {isInstallable && (
                    <div className="bg-brand-50 dark:bg-brand-900/30 p-4 rounded-xl border border-brand-100 dark:border-brand-800/50">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-gold-600 rounded-lg flex items-center justify-center text-white shrink-0">
                                <Smartphone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-900 dark:text-white text-sm">Install App</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Add to home screen for faster access.</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => { installApp(); setIsSettingsOpen(false); }}
                            className="w-full bg-brand-900 dark:bg-white text-white dark:text-brand-900 font-bold text-sm py-2 rounded-lg hover:bg-gold-600 dark:hover:bg-gold-400 transition-colors shadow-sm"
                        >
                            Install Now
                        </button>
                    </div>
                )}

                {/* Mobile Only: Navigation Items not in Bottom Nav */}
                <div className="lg:hidden space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Menu</label>
                    <Link 
                        to="/updates"
                        onClick={() => setIsSettingsOpen(false)}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-gold-500 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <FileText size={20} className="text-gold-600" />
                            <span className="font-medium text-slate-700 dark:text-slate-200">{content.nav.updates}</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                    </Link>
                </div>

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
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Font Size</label>
                        <span className="px-2 py-0.5 bg-gold-50 dark:bg-gold-500/10 text-[10px] font-bold text-gold-600 rounded">{fontSize}%</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 flex items-center gap-4">
                        <button onClick={() => setFontSize(Math.max(85, fontSize - 5))} className="text-slate-400 hover:text-gold-600"><Type size={14} strokeWidth={3} /></button>
                        <input type="range" min="85" max="125" step="5" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-gold-600" />
                        <button onClick={() => setFontSize(Math.min(125, fontSize + 5))} className="text-slate-400 hover:text-gold-600"><Type size={22} strokeWidth={2} /></button>
                    </div>
                </div>

                {/* Admin Portal Link */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <Link 
                        to="/admin"
                        onClick={() => setIsSettingsOpen(false)}
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-brand-900 transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <Shield size={20} className="text-slate-400 group-hover:text-brand-900 dark:group-hover:text-white" />
                            <span className="font-medium text-slate-500 group-hover:text-brand-900 dark:text-slate-400 dark:group-hover:text-white">Admin Portal</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300" />
                    </Link>
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

      {/* Redesigned Mobile Bottom Navigation (Inline SVG Version) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-[90] lg:hidden safe-bottom">
        <div className="grid grid-cols-5 h-[65px] items-center pb-1">
            {bottomNavLinks.map((link, idx) => {
                const active = isActive(link.path);
                
                return (
                    <Link 
                        key={idx}
                        to={link.path}
                        className={`group flex flex-col items-center justify-center h-full transition-all relative ${link.special ? '-translate-y-5' : ''}`}
                    >
                        {link.special ? (
                            /* Floating Action Button (Center) - Scales */
                            <div className={`
                                relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
                                ${active ? 'bg-gold-600 shadow-gold-500/40 ring-4 ring-white dark:ring-slate-900 scale-105' : 'bg-brand-900 dark:bg-slate-800 ring-4 ring-white dark:ring-slate-900'}
                            `}>
                                {/* Progress Ring SVG */}
                                <svg className="absolute inset-0 w-full h-full p-0 pointer-events-none -rotate-90 scale-110" viewBox="0 0 40 40">
                                    <circle className="text-transparent" strokeWidth="2" stroke="currentColor" fill="transparent" r={radius} cx="20" cy="20" />
                                    {active && <circle className="text-white/30" strokeWidth="2" strokeDasharray={circumference} strokeDashoffset={circumference - (scrollProgress / 100) * circumference} strokeLinecap="round" stroke="currentColor" fill="transparent" r={radius} cx="20" cy="20" style={{ transition: 'stroke-dashoffset 0.1s linear' }} />}
                                </svg>
                                
                                <div className={`${active ? 'text-white' : 'text-gold-500'}`}>
                                   <NavIcon name={link.icon} active={active} isSpecial={true} />
                                </div>
                            </div>
                        ) : (
                            /* Standard Nav Item */
                            <>
                                <div className={`transition-all duration-300 mb-0.5 ${active ? 'text-gold-600' : 'text-slate-400 dark:text-slate-500'}`}>
                                    <NavIcon name={link.icon} active={active} />
                                </div>
                            </>
                        )}
                        
                        <span className={`text-[10px] font-bold uppercase tracking-tight transition-all duration-300 ${active ? 'text-gold-600' : 'text-slate-400 dark:text-slate-500'}`}>
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
