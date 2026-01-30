
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PWAContextType {
  isInstallable: boolean;
  isInstalled: boolean;
  installApp: () => void;
  showPrompt: boolean;
  setShowPrompt: (show: boolean) => void;
}

const PWAContext = createContext<PWAContextType | undefined>(undefined);

export const PWAProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      setIsInstallable(true);
      
      // Check if user has already dismissed it in this session
      const hasDismissed = sessionStorage.getItem('pwa-dismissed');
      if (!hasDismissed) {
          setShowPrompt(true);
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setShowPrompt(false);
      console.log('PWA was installed');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // --- DEMO/PREVIEW MODE FIX ---
    // Since AI Studio/Previews block the install prompt, we simulate it appearing after 1 second
    // so you can verify the UI design.
    const demoTimer = setTimeout(() => {
        setIsInstallable(prev => {
            // Only force it if it hasn't been detected natively yet
            if (!prev && !isInstalled) {
                const hasDismissed = sessionStorage.getItem('pwa-dismissed');
                if (!hasDismissed) setShowPrompt(true);
                return true; 
            }
            return prev;
        });
    }, 1000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearTimeout(demoTimer);
    };
  }, [isInstalled]);

  const installApp = async () => {
    if (!deferredPrompt) {
      // Fallback for browsers/environments that don't support the prompt API (like iOS or AI Studio Preview)
      alert("To install the app:\n\n• Mobile (iOS): Tap 'Share' -> 'Add to Home Screen'\n• Mobile (Android): Tap 'Menu' -> 'Install App'\n• Desktop: Click the install icon in the address bar");
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      setDeferredPrompt(null);
      setIsInstallable(false);
      setShowPrompt(false);
    } else {
      console.log('User dismissed the install prompt');
    }
  };

  return (
    <PWAContext.Provider value={{ isInstallable, isInstalled, installApp, showPrompt, setShowPrompt }}>
      {children}
    </PWAContext.Provider>
  );
};

export const usePWA = () => {
  const context = useContext(PWAContext);
  if (context === undefined) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
};
