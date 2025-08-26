import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <h1>Naura's Portfolio</h1>
      <nav className='Menu'>
        <NavLink to='/' className='nav-link'>About</NavLink> |
        <NavLink to='/skills' className='nav-link'> Skills</NavLink> |
        <NavLink to='/history' className='nav-link'> History</NavLink> |
        <NavLink to='/tools' className='nav-link'> Tools</NavLink>
      </nav>
    </header>
  );
}

export default Header;