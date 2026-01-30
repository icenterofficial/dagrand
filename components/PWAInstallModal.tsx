
import React from 'react';
import { usePWA } from '../context/PWAContext';
import { Download, X } from 'lucide-react';
import Romduol from './Romduol';

const PWAInstallModal = () => {
  const { isInstallable, showPrompt, installApp, setShowPrompt } = usePWA();

  if (!isInstallable || !showPrompt) return null;

  const handleDismiss = () => {
      setShowPrompt(false);
      sessionStorage.setItem('pwa-dismissed', 'true');
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center pointer-events-none p-4 sm:p-6">
      {/* Animation Container */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden pointer-events-auto animate-fade-in-up relative">
         
         {/* Background Decoration */}
         <Romduol className="absolute -top-10 -right-10 w-32 h-32 text-gold-500/10 rotate-12 pointer-events-none" />
         
         <div className="p-6 relative z-10">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-brand-900 rounded-xl flex items-center justify-center text-gold-500 shadow-lg">
                     <Download size={24} />
                </div>
                <button 
                    onClick={handleDismiss}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            <h3 className="text-xl font-serif font-bold text-brand-900 dark:text-white mb-2">
                Install App
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Install Dagrand Law Office app for a better experience, faster access, and offline capabilities.
            </p>

            <div className="flex gap-3">
                <button 
                    onClick={handleDismiss}
                    className="flex-1 py-3 px-4 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    Maybe Later
                </button>
                <button 
                    onClick={installApp}
                    className="flex-1 py-3 px-4 rounded-lg bg-gold-600 text-white font-bold text-sm hover:bg-gold-500 transition-colors shadow-lg shadow-gold-500/20"
                >
                    Install Now
                </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PWAInstallModal;
