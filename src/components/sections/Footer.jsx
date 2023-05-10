import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='section footer-section'>
      <section>
        <div className='footer-links'>
          <a
            title='https://linkedin.com/in/gavinhon'
            href='https://linkedin.com/in/gavinhon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              width='32'
              height='32'
              src='./linkedin.svg'
              alt='linkedin image'
            />
          </a>
          <a
            title='https://github.com/gavinhon'
            href='https://github.com/gavinhon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img width='32' height='32' src='./github.svg' alt='github image' />
          </a>
        </div>
        <p className='footer-copyright'>
          &copy; Gavin Hon 2023. All rights reserved.
        </p>
      </section>
    </div>
  );
}

export default Footer;
