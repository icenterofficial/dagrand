<<<<<<< HEAD

import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { ArticleProvider } from './context/ArticleContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Team from './pages/Team.tsx';
import PracticeList from './pages/PracticeList.tsx';
import PracticeDetail from './pages/PracticeDetail.tsx';
import Updates from './pages/Updates.tsx';
import UpdateDetail from './pages/UpdateDetail.tsx';
import Contact from './pages/Contact.tsx';
import Admin from './pages/Admin.tsx';
import NotFound from './pages/NotFound.tsx';

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
};

const App = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ArticleProvider>
          <HashRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="team" element={<Team />} />
                <Route path="practices" element={<PracticeList />} />
                <Route path="practices/:id" element={<PracticeDetail />} />
                <Route path="updates" element={<Updates />} />
                <Route path="updates/:id" element={<UpdateDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </HashRouter>
        </ArticleProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
=======
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './src/components/Layout';
import { PageTransition } from './src/components/PageTransition';
import { Toaster } from './src/components/Toast'; // Import Toast
import Home from './src/pages/Home';
import About from './src/pages/About';
import Team from './src/pages/Team';
import PracticeList from './src/pages/PracticeList';
import PracticeDetail from './src/pages/PracticeDetail';
import Updates from './src/pages/Updates';
import UpdateDetail from './src/pages/UpdateDetail';
import Contact from './src/pages/Contact';
import NotFound from './src/pages/NotFound';
import Admin from './src/pages/Admin';

// This component handles all public pages that need the Navbar and Footer
const PublicRoutes = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="/practice-areas" element={<PageTransition><PracticeList /></PageTransition>} />
          <Route path="/practice-areas/:id" element={<PageTransition><PracticeDetail /></PageTransition>} />
          <Route path="/updates" element={<PageTransition><Updates /></PageTransition>} />
          <Route path="/updates/:id" element={<PageTransition><UpdateDetail /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Toaster /> {/* Add Toast Provider */}
        <Routes>
          {/* Admin Route is isolated OUTSIDE the Layout */}
          <Route path="/admin" element={<Admin />} />
          
          {/* All other routes are wrapped in PublicRoutes which contains the Layout */}
          <Route path="/*" element={<PublicRoutes />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}
>>>>>>> f577f38 (first commit)
