// About.js
import React from 'react';
import ContactForm from './ContactForm'; // Import the ContactForm component
import Navbar from './Navbar';

function About() {
  return (
    <div>
      <Navbar/>
      <h1>About Me</h1>
      <p>I am Pratham, and I do this and that...</p>
      <ContactForm /> {/* Include the ContactForm component */}
    </div>
  );
}

export default About;
