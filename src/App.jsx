import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Login from './components/Login';
import Legal from './components/Legal';
import About from './components/About';
import Workshops from './components/Workshops';
import Exhibitor from './components/Exhibitor';
import Team from './components/Team';
import Newsroom from './components/Newsroom';
import Sustainability from './components/Sustainability';
import NotFound from './components/NotFound';
import LandingPage from './pages/LandingPage';
import DesignPreview from './pages/DesignPreview';
import ScrollToTop from "./layout/scrollToTop";
import Contact from './components/Contact';
import VisitorPass from './components/VisitorPassForm';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';

const AnalyticsTracker = () => {
  useGoogleAnalytics();
  return null;
};

const App = () => {
    /* ✅ Analytics initializer (runs inside Router) */


  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Router>
      <AnalyticsTracker/>

      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/visitor-pass" element={<> <Navbar /> <VisitorPass /> <Footer /> </>} />
          
           <Route path="/contact" element={<> <Navbar /> <Contact /> <Footer /> </>} />
          <Route path="/about" element={<> <Navbar /> <About /> <Footer /> </>} />
          <Route path="/workshops" element={<> <Navbar /> <Workshops /> <Footer /> </>} />
          <Route path="/exhibitor" element={<> <Navbar /> <Exhibitor /> <Footer /> </>} />
          <Route path="/team" element={<> <Navbar /> <Team /> <Footer /> </>} />
          <Route path="/news" element={<> <Navbar /> <Newsroom /> <Footer /> </>} />
          <Route path="/sustainability" element={<> <Navbar /> <Sustainability /> <Footer /> </>} />
          <Route path="/design-preview" element={<DesignPreview />} />
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="/visitor-pass" element={<> <Navbar /> <VisitorPass/> <Footer /> </>} />
          

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
