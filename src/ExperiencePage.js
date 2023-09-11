// ExperiencePage.js

import React from 'react';
import Experience from './Experience'; // Import the Experience component
import Navbar from './Navbar'; // Import your Navbar component


function ExperiencePage() {
  console.log("Experience page");
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Experience /> {/* Include the Experience component */}
    </div>
  );
}

export default ExperiencePage;
