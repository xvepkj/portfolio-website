// Profile.js

import React from 'react';
import './Profile.css'; 

function Profile() {
  return (
    <div className="profile">
      <img
        src={process.env.PUBLIC_URL + '/images/linkdinpic.jpeg'} 
        alt="Pratham Kumar Jha"
        className="profile-image"
      />
      <div className="profile-info">
        <h2>Pratham Kumar Jha</h2>
        <p>I am a software engineer with over 1.5 years of experience in android development. Willing to learn new technologies</p>
      </div>
    </div>
  );
}

export default Profile;
