import React from 'react';
import './style.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function SocMed() {
  return (
    <div className="socmed-container">
      <a href="https://instagram.com/nauraftyaz" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://www.linkedin.com/in/naura-fathiya-azzahra-9a558833a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="mailto:naurafathiya.a@gmail.com"><FaEnvelope /></a>
      <a href="tel:+6282132652781"><FaPhone /></a>
    </div>
  );
}

export default SocMed;