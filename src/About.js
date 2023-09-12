import React from 'react';
import ContactForm from './ContactForm';
import './About.css'; // Import the About component's CSS

function About() {
  return (
    <div>
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Feel free to contact me about a project or an opportunity! Or even if
          you just want to talk about tech!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default About;
