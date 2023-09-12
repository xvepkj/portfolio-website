// Home.js

import React from 'react';
import Profile from './Profile'; // Import the Profile component
import './Home.css'; 


function Home() {
  return (
    <div>
      <div className="content">
        <Profile /> {/* Include the Profile component */}
        {/* Add the rest of your homepage content here */}
      </div>
    </div>
  );
}

export default Home;
