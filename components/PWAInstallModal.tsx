
import React from 'react';
import { usePWA } from '../context/PWAContext';
import { Download, X, Smartphone } from 'lucide-react';
import { Romduol } from './Romduol';

const PWAInstallModal = () => {
  const { isInstallable, showPrompt, installApp, setShowPrompt } = usePWA();

  if (!isInstallable || !showPrompt) return null;

  const handleDismiss = () => {
      setShowPrompt(false);
      sessionStorage.setItem('pwa-dismissed', 'true');
  };

  return (
    <div className="fixed inset-x-0 bottom-20 lg:bottom-10 z-[150] px-4 animate-fade-in-up flex justify-center pointer-events-none">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden pointer-events-auto relative">
         <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-brand-950 rounded-xl flex items-center justify-center text-gold-500 shadow-lg">
                     <Smartphone size={24} />
                </div>
                <button 
                    onClick={handleDismiss}
                    className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            <h3 className="text-lg font-serif font-bold text-brand-950 dark:text-white mb-1">
                Install Official App
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Get faster access and offline support for Dagrand Law Office.
            </p>

            <div className="flex gap-3">
                <button 
                    onClick={handleDismiss}
                    className="flex-1 py-2.5 px-4 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    Maybe Later
                </button>
                <button 
                    onClick={installApp}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-gold-500 text-white font-bold text-xs hover:bg-gold-600 transition-colors shadow-lg"
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
