import React, { useState } from 'react';
import './Profile.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

function Profile() {
  const [h2Hovered, setH2Hovered] = useState(false);
  const [githubIconHovered, setGithubIconHovered] = useState(false);
  const [linkedinIconHovered, setLinkedinIconHovered] = useState(false);
  const [emailIconHovered, setEmailIconHovered] = useState(false);
  const [pdfIconHovered, setPdfIconHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  const handleH2Hover = () => {
    setH2Hovered(true);
  };

  const handleH2Leave = () => {
    setH2Hovered(false);
  };

  const h2Color = h2Hovered ? '#E63946' : '#333';

  const handleImageHover = () => {
    setImageHovered(true);
  };

  const handleImageLeave = () => {
    setImageHovered(false);
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <img
          src={imageHovered ? process.env.PUBLIC_URL + '/images/outlined_linkdinpic.png'  : process.env.PUBLIC_URL + '/images/linkdinpic.png'}
          alt="Pratham Kumar Jha"
          className="profile-image"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        />
        <div className="profile-info">
          <h2
            onMouseEnter={handleH2Hover}
            onMouseLeave={handleH2Leave}
            style={{ color: h2Color }}
          >
            Pratham Kumar Jha
          </h2>
          <p>
            I'm a software engineer who enjoys exploring and adopting new
            technologies to enhance my skills and contribute to tech
            advancements.
          </p>

          <div className="contact-icons">
            <a
              href="https://github.com/xvepkj"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setGithubIconHovered(true)}
              onMouseLeave={() => setGithubIconHovered(false)}
            >
              <FaGithub
                size={30}
                color={githubIconHovered ? '#E63946' : '#333'}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-kumar-jha"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setLinkedinIconHovered(true)}
              onMouseLeave={() => setLinkedinIconHovered(false)}
            >
              <FaLinkedin
                size={30}
                color={linkedinIconHovered ? '#E63946' : '#333'}
              />
            </a>
            <a
              href="mailto:prathamkumarjha@gmail.com"
              onMouseEnter={() => setEmailIconHovered(true)}
              onMouseLeave={() => setEmailIconHovered(false)}
            >
              <FaEnvelope
                size={30}
                color={emailIconHovered ? '#E63946' : '#333'}
              />
            </a>
            <a
              href="https://1drv.ms/b/s!Aq8ntTdOhKJxgdU2tMJAbeRN_axmwg?e=sNhUe1"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setPdfIconHovered(true)}
              onMouseLeave={() => setPdfIconHovered(false)}
            >
              <FaFilePdf size={30} color={pdfIconHovered ? '#E63946' : '#333'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
