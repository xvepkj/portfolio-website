import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div>
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="project">
          <h2>Wolf Warrior - 2D Game</h2>
          <a href="https://xvepkj.github.io/game1/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/xvepkj/game1" target="_blank" rel="noopener noreferrer">Repo</a>
          <ul>
            <li>Made a 2D platformer game using Unity game engine.</li>
            <li>Added multiple types of traps, enemies, and implemented their functionality using C# scripts.</li>
            <li><strong>Tech Stack:</strong> Unity, C#</li>
          </ul>
        </div>

        <div className="project">
          <h2>Scheduler - Activity Planner and Tracker</h2>
          <a href="https://play.google.com/store/apps/details?id=com.xve.scheduler" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/xvepkj/scheduler-android" target="_blank" rel="noopener noreferrer">Repo</a>
          <ul>
            <li>Designed an app in Kotlin that helps users maintain their schedule, leading to better productivity.</li>
            <li>Implemented event templates with flexible scheduling options based on weekly or monthly criteria.</li>
            <li>Enhanced user experience by implementing efficiency tracking via tags and statistics.</li>
            <li><strong>Tech Stack:</strong> Kotlin, PaperDB</li>
          </ul>
        </div>

        <div className="project">
          <h2>LegalAssist</h2>
          <a href="https://www.naagar.com/" target="_blank" rel="noopener noreferrer">Live</a>
          <ul>
            <li>Collaborated on the backend development of a Node.js web-based case management app for advocates.</li>
            <li><strong>Tech Stack:</strong> Node.js</li>
          </ul>
        </div>

        {/* Add your additional projects here */}
        <div className="project">
          <h2>Portfolio Website</h2>
          <a href="https://xvepkj.github.io/portfolio-website/" target="_blank" rel="noopener noreferrer">Live</a> | <a href="https://github.com/xvepkj/portfolio-website" target="_blank" rel="noopener noreferrer">Repo</a>
          <ul>
            <li>Designed and developed this website using React.js and hosted it on GitHub Pages.</li>
            <li>Implemented the contact form using email.js for contact functionality.</li>
            <li><strong>Tech Stack:</strong> React.js, email.js</li>
          </ul>
        </div>

        <div className="project">
          <h2>Auto Assign Reviewer GitHub Action</h2>
          <a href="https://github.com/xvepkj/auto-assign-reviewer" target="_blank" rel="noopener noreferrer">Repo</a>
          <ul>
            <li>Created a GitHub Action to automatically assign a reviewer to a Pull Request from collaborators of the repo.</li>
            <li>Implemented using JavaScript.</li>
            <li><strong>Tech Stack:</strong> JavaScript</li>
          </ul>
        </div>

        <div className="project">
          <h2>Image Watermarker Desktop App</h2>
          <a href="https://github.com/xvepkj/watermarker-auto" target="_blank" rel="noopener noreferrer">Repo</a>
          <ul>
            <li>Developed a Python desktop application to add watermarks to images in a folder.</li>
            <li>Created a user-friendly UI using Tkinter and provided a config file for customization.</li>
            <li><strong>Tech Stack:</strong> Python, Tkinter</li>
          </ul>
        </div>

        <div className="project">
          <h2>Keybr.com Chrome Extension</h2>
          <a href="https://github.com/xvepkj/keybr-Extension" target="_blank" rel="noopener noreferrer">Repo</a>
          <ul>
            <li>Developed a Google Chrome extension to integrate Keybr.com features into the browser.</li>
            <li><strong>Tech Stack:</strong> HTML</li>
          </ul>
        </div>

        {/* GitHub Link */}
        <div className="github-link">
          <a href="https://github.com/xvepkj" target="_blank" rel="noopener noreferrer">Check out more on my GitHub...</a>
        </div>

        {/* Competitive Programming Profiles */}
        <div className="competitive-profiles">
          <h2>Competitive Programming Profiles</h2>
          <ul>
            <li>
              <a href="https://codeforces.com/profile/pkj" target="_blank" rel="noopener noreferrer"><strong>Codeforces</strong></a> - Rating 1679, Problems Solved: 904
            </li>
            <li>
              <a href="https://www.codechef.com/users/xvepkj" target="_blank" rel="noopener noreferrer"><strong>Codechef</strong></a> - Rating 1866, Problems Solved: 111
            </li>
            <li>
              <a href="https://uhunt.onlinejudge.org/id/1012618" target="_blank" rel="noopener noreferrer"><strong>uhunt</strong></a> - Rank: 3774, Problems Solved: 255
            </li>
            <li>
              <a href="https://leetcode.com/pkjrockzz/" target="_blank" rel="noopener noreferrer"><strong>LeetCode</strong></a> - Problems Solved: 290
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
