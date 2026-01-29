
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ArticleProvider } from './context/ArticleContext';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import PracticeList from './pages/PracticeList';
import PracticeDetail from './pages/PracticeDetail';
import Updates from './pages/Updates';
import UpdateDetail from './pages/UpdateDetail';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// ScrollToTop component to handle scroll on navigation
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
              </Route>
              {/* Admin Route */}
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </HashRouter>
        </ArticleProvider>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;
