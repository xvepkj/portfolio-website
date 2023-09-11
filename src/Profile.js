// Profile.js

import React from 'react';
import './Profile.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'; // Import font icons

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
        <p>Pratham is a software engineer.</p>

        {/* Logos and contact information */}
        <div className="contact-icons">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={30} />
          </a>  
          <a href="https://1drv.ms/b/s!Aq8ntTdOhKJxgdU2tMJAbeRN_axmwg?e=sNhUe1" target="_blank" rel="noopener noreferrer">
          <FaFilePdf size={30} />
          </a>  
        </div>
      </div>
    </div>
  );
}

export default Profile;
