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



const App = () => {
  // Global Theme Initialization
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<> <Navbar /> <About /> <Footer /> </>} />
          <Route path="/workshops" element={<> <Navbar /> <Workshops /> <Footer /> </>} />
          <Route path="/exhibitor" element={<> <Navbar /> <Exhibitor /> <Footer /> </>} />
          <Route path="/team" element={<> <Navbar /> <Team /> <Footer /> </>} />
          <Route path="/news" element={<> <Navbar /> <Newsroom /> <Footer /> </>} />
          <Route path="/sustainability" element={<> <Navbar /> <Sustainability /> <Footer /> </>} />
          <Route path="/design-preview" element={<DesignPreview />} />
          <Route path="/privacy" element={<Legal type="privacy" />} />
          <Route path="/terms" element={<Legal type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;