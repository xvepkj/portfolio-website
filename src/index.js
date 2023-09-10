// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import your homepage component
// Import other components for your projects, about, and contact pages

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Define routes for your other pages here */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
