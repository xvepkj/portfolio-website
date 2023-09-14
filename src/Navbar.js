// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    // Close the menu on item click if it's open (only for mobile)
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const getItemColor = (item) => {
    return activeItem === item ? '#E63946' : '#1D3557';
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav>
      {/* Mobile Menu Button */}
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Sidebar Menu */}
      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
      <li className="navbar-item pkj">
          <Link
            to="/portfolio-website"
            onClick={() => handleItemClick('PKJ')}
            style={{ color: getItemColor('PKJ') }}
          >
            PKJ
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/portfolio-website"
            onClick={() => handleItemClick('Home')}
            style={{ color: getItemColor('Home') }}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/projects"
            onClick={() => handleItemClick('Projects')}
            style={{ color: getItemColor('Projects') }}
          >
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/experience"
            onClick={() => handleItemClick('Experience')}
            style={{ color: getItemColor('Experience') }}
          >
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/about"
            onClick={() => handleItemClick('About')}
            style={{ color: getItemColor('About') }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
