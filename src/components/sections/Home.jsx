import React from 'react';
import ThreeEarth from '../ThreeEarth';
import './Home.css';

function Home() {
  return (
    <div id='home-section' className='section home-section'>
      <section>
        <div className='home-content'>
          <p>
            Hi! I'm{' '}
            <a
              id='profile-name'
              title='https://linkedin.com/in/gavinhon'
              href='https://linkedin.com/in/gavinhon'
              target='_blank'
              rel='noopener noreferrer'
            >
              Gavin Hon
            </a>
          </p>
          <h3>I specialize in presales and software development.</h3>
          <a id='border-btn' href='#about-section'>
            About Me
          </a>
        </div>
      </section>
      <div className='bg-container'>
        <ThreeEarth />
      </div>
    </div>
  );
}

export default Home;
