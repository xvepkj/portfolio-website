// Home.js

import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile'; // Import the Profile component
import './Home.css'; 

function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Profile /> {/* Include the Profile component */}
        {/* Add the rest of your homepage content here */}
      </div>
    </div>
  );
}

export default Home;
