// ExperiencePage.js

import React from 'react';
import Experience from './Experience'; // Import the Experience component
import './ExperiencePage.css'

function ExperiencePage() {
  console.log("Experience page");
  return (
    <div>
      <div className='experience-container'>
        <h1>Experience</h1>
        <Experience /> {/* Include the Experience component */}
      </div>
    </div>
  );
}

export default ExperiencePage;
