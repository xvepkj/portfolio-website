import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // Determine the active item based on the current URL path
  const getActiveItem = () => {
    const pathname = location.pathname;
    if (pathname === '/projects') return 'Projects';
    else if (pathname === '/experience') return 'Experience';
    else if (pathname === '/about') return 'About';
    else return 'Home'; // Default to 'Home' for other paths
  };

  useEffect(() => {
    // Set the active item when the component mounts and when the URL changes
    const activeItem = getActiveItem();
    setActiveItem(activeItem);
  }, [location.pathname]);

  const [activeItem, setActiveItem] = useState(getActiveItem());

  // Function to close the menu when an item is clicked
  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <nav>
      {/* Mobile Menu Button */}
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div> {/* Line under menu button */}
      </div>

      {/* Sidebar Menu */}
      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/portfolio-website" style={{ color: activeItem === 'Home' ? '#E63946' : '#1D3557' }}>
            Home
          </Link>
        </li>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/projects" style={{ color: activeItem === 'Projects' ? '#E63946' : '#1D3557' }}>
            Projects
          </Link>
        </li>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/experience" style={{ color: activeItem === 'Experience' ? '#E63946' : '#1D3557' }}>
            Experience
          </Link>
        </li>
        <li className="navbar-item" onClick={closeMenu}>
          <Link to="/about" style={{ color: activeItem === 'About' ? '#E63946' : '#1D3557' }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
