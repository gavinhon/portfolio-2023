import React from 'react';
import ThreeEarth from '../ThreeEarth';
import './Home.css';

function Home() {
  return (
    <div id='home-section' className='section home-section'>
      <section>
        <div className='home-content'>
          <p>
            Hi! I'm <span>Gavin Hon</span>
          </p>
          <h3>I specialize in presales and software development.</h3>
          <a href='#about-section'>About Me</a>
        </div>
      </section>
      <ThreeEarth />
    </div>
  );
}

export default Home;
