import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function About() {
  const navigate = useNavigate();

  const goToSkills = () => {
    navigate('/skills');
  };

  return (
    <div className="about">
      <div className="about-left">
        <h1>Hi, I'm <span className="highlight">Naura Fathiya</span></h1>
        <p>
        An Informatics and Computer Engineering student who is curious about technology, communication, and self-development. I enjoy teamwork, critical thinking, and finding practical solutions. Currently, I’m focused on building strong skills and character, and open to opportunities that support growth in a positive, challenging environment.
        </p>
        <button className="skills-button" onClick={goToSkills}>
          Keep in Touch with Me
        </button>
      </div>
      <div className="about-right">
        <img src="/naura.png" alt="me" className="avatar" />
      </div>
    </div>
  );
}

export default About;