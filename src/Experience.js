import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <div className="experience-item">
        <div className="experience-content">
          <div className="company-logo">
            <img src="https://flobiz.in/wp-content/uploads/2020/02/Group-8.png" alt="Flobiz Logo" />
          </div>
          <div className="experience-details">
            <h3><strong>Flobiz (Fintech Startup - 1 million DAU)</strong></h3>
            <p className="designation"><strong>Software Engineer</strong></p>
            <p className="duration"><strong>May 2022 - April 2023</strong></p>
            <ul>
              <li>Owned and iterated on core app functionalities: Merchant Report Generation and App Paywall.</li>
              <li>Enhanced Merchant Report Generation with advanced filtering, downloading, and sharing capabilities.</li>
              <li>Revamped and centralized the App Paywall for app-wide module integration.</li>
              <li>Proposed & implemented Downloadable Fonts - reduced 5 MB in app size, & App Cloning - saved $10k/yr in 3rd-party costs.</li>
              <li>Mentored interns and new hires during their ramp-up to Flobiz tech stack and release process.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add a line break between experiences */}
      <div className="experience-divider"></div>

      {/* Additional experience */}
      <div className="experience-item">
        <div className="experience-content">
          <div className="company-logo">
            {/* You can add the logo image source here */}
            <img src="https://flobiz.in/wp-content/uploads/2020/02/Group-8.png" alt="Additional Experience Logo" />
          </div>
          <div className="experience-details">
            <h3><strong>Flobiz (Fintech Startup - 1 million DAU)</strong></h3>
            <p className="designation"><strong>Software Engineer Intern</strong></p>
            <p className="duration"><strong>September 2021 - April 2022</strong></p>
            <ul>
              <li>Developed GST-based data autofill features to streamline user onboarding.</li>
              <li>Developed multiple features such as Payment Voice Notification and Cashback Rewards.</li>
              <li>Identified and fixed critical bugs and app crashes in the flagship product, myBillBook.</li>
              {/* Add more details for this experience if needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional experiences */}
      <div className="experience-item">
        <div className="experience-content">
          <div className="company-logo">
            <img src="https://i.postimg.cc/bvz1F5dN/longdesc2.png" alt="GeeksforGeeks Logo" />
          </div>
          <div className="experience-details">
            <h3><strong>GeeksforGeeks</strong></h3>
            <p className="designation"><strong>Technical Intern</strong></p>
            <p className="duration"><strong>December 2020 - March 2021</strong></p>
            <ul>
              <li>Published innovative solutions to complex Data Structures and Algorithms related problems.</li>
              <li>Provided working code in C++ for solution demonstration.</li>
              {/* Add more details for this experience if needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
