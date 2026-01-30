
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
