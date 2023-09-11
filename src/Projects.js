// Projects.js

import React from 'react';
import './Projects.css';
import Navbar from './Navbar'; // Import your Navbar component

function Projects() {
  return (
    <div>
        <Navbar /> {/* Include the Navbar component */}
        <div className="projects-container">
        <h1>Projects</h1>
        <div className="project">
            <h2>Wolf Warrior - 2D Game</h2>
            <a href="https://xvepkj.github.io/game1/" target="_blank" rel="noopener noreferrer">Link</a>
            <ul>
            <li>Made a 2D platformer game using Unity game engine.</li>
            <li>Added multiple types of traps, enemies, and implemented their functionality using C# scripts.</li>
            </ul>
        </div>

        <div className="project">
            <h2>Scheduler - Activity Planner and Tracker</h2>
            <a href="https://play.google.com/store/apps/details?id=com.xve.scheduler" target="_blank" rel="noopener noreferrer">Link</a>
            <ul>
            <li>Designed an app in Kotlin that helps users maintain their schedule, leading to better productivity.</li>
            <li>Implemented event templates with flexible scheduling options based on weekly or monthly criteria.</li>
            <li>Enhanced user experience by implementing efficiency tracking via tags and statistics.</li>
            </ul>
        </div>

        <div className="project">
            <h2>LegalAssist</h2>
            <a href="https://www.naagar.com/" target="_blank" rel="noopener noreferrer">Link</a>
            <ul>
            <li>Collaborated on the backend development of a Node.js web-based case management app for advocates.</li>
            </ul>
        </div>
        </div>
    </div>
  );
}

export default Projects;
