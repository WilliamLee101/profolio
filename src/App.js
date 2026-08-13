import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import ResearchDetail from './components/ResearchDetail';
import Publications from './components/Publications';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import './App.css';
import RLBackground from './components/RLBackground';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Update activeTab based on current route
  useEffect(() => {
    const path = location.pathname;
    const tab = path === '/' ? 'home' : path.slice(1);
    setActiveTab(tab);
  }, [location]);

  // Close the mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', tab: 'home', label: 'Home' },
    { path: '/about', tab: 'about', label: 'About' },
    { path: '/research', tab: 'research', label: 'Research' },
    { path: '/publications', tab: 'publications', label: 'Publications' },
    { path: '/work', tab: 'work', label: 'Work Experience' },
    { path: '/projects', tab: 'projects', label: 'Projects' }
  ];

  return (
    <div className="App">
      <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="logo">WL</div>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-right ${menuOpen ? 'open' : ''}`}>
          {navItems.map(({ path, tab, label }) => (
            <Link
              key={tab}
              to={path}
              data-tab={tab}
              className={activeTab === tab ? 'active' : ''}
              onMouseEnter={() => setActiveTab(tab)}
              onClick={() => setActiveTab(tab)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <RLBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:id" element={<ResearchDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router basename="/profolio">
      <AppContent />
    </Router>
  );
}

export default App;