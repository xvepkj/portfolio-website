// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import a CSS file for styling (create this file if it doesn't exist)

function Navbar() {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/projects">Projects</Link></li>
        <li className="navbar-item"><Link to="/experience">Experience</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
