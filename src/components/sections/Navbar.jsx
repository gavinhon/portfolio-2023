import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='section navbar-section'>
      <section>
        <input type='checkbox' id='nav-toggle' aria-label='Navigation Toggle' />
        <label htmlFor='nav-toggle' className='toggle-label'>
          <span className='hamburger-icon'></span>
        </label>
        <nav className='main-nav'>
          <a href='#home-section'>Home</a>
          <a href='#about-section'>About</a>
          <a href='#work-section'>Work</a>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
