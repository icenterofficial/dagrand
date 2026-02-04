<<<<<<< HEAD

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { PWAProvider } from './context/PWAContext.tsx';
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './src/contexts/LanguageContext';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { AuthProvider } from './src/contexts/AuthContext';
import './index.css';
import App from './App';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h1 style={{ color: '#dc2626', fontSize: '24px', marginBottom: '16px' }}>Something went wrong</h1>
          <p style={{ color: '#4b5563', marginBottom: '24px' }}>Please try refreshing the page. If the issue persists, contact support.</p>
          <pre style={{ 
            textAlign: 'left', 
            background: '#f3f4f6', 
            padding: '20px', 
            borderRadius: '8px', 
            overflow: 'auto',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#ef4444'
          }}>
            {this.state.error?.message}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '24px',
              padding: '10px 20px',
              backgroundColor: '#153c63',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
>>>>>>> f577f38 (first commit)

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

<<<<<<< HEAD
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PWAProvider>
        <App />
    </PWAProvider>
  </React.StrictMode>
);

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
=======
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
>>>>>>> f577f38 (first commit)
