import React from 'react';
import './style.css';

export default function Skills() {
  return (
    <div className="skills-page">
  <h2 className="page-title">
    Here's a sneak peek at the <span className="highlight">Skills</span> I'm rocking with!
  </h2>
  <div className="skills-container">
    <div className="skill-card">
      <h3>Programming</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>C++</li>
        <li>ReactJS</li>
        <li>PHP</li>
      </ul>
    </div>

    <div className="skill-card">
      <h3>Certificate</h3>
      <ul>
        <li>Cisco Certified Network Associate (CCNA)</li>
      </ul>
    </div>
  </div>
</div>

  );
}
