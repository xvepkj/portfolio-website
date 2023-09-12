// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Initialize the active state with a default value
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle click events and update the active item
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Function to determine the color of a navbar item based on its active state
  const getItemColor = (item) => {
    return activeItem === item ? '#E63946' : '#1D3557';
  };

  return (
    <nav>
      <ul className="navbar-list">
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
