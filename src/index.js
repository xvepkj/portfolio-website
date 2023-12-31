import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import path
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import your homepage component
import ExperiencePage from './ExperiencePage';
import Projects from './Projects';
import About from './About';
import Navbar from './Navbar';
import './index.css';

// Import other components for your projects, about, and contact pages

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Navbar /> {/* Add the Navbar component here */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
      {/* Define routes for your other pages here */}
    </Routes>
  </Router>
);