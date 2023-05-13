import React, { useEffect } from 'react';
import ThreeEarth from '../ThreeEarth';
import './Home.css';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.0 }
    );
    const sectionElements = document.querySelectorAll('#bg');
    sectionElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div id='home-section' className='section home-section hide-for-show'>
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
