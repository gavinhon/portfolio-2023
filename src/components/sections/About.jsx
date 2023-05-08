import React from 'react';
import './About.css';

function About() {
  return (
    <div id='about-section' className='section about-section'>
      <section>
        <h3 id='about-title'>About Me</h3>
        <div className='about-content'>
          <p id='about-content-p1'>
            I started out as a software developer that focused on semiconductor
            application and geospatial web application development.
          </p>
          <p id='about-content-p2'>
            Now, I specialize in creating proof-of-concept applications tailored
            to meet clients' specific requirements. I also offer technical
            consulting services on both backend infrastructure and frontend
            development.
          </p>
          <p id='about-content-p3'>
            Currently, I hold the position of Presales Engineer at
            <a
              title='https://hexagon.com/'
              href='https://hexagon.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              Hexagon
            </a>
            .
          </p>
          <div className='about-content-img'>
            <img alt='profile picture' src='./dp.jpg' />
            <div className='tint'></div>
          </div>
          <div className='about-content-skills'>
            <span>Experienced in:</span> Javascript / ReactJS / NodeJS /
            CesiumJS / ExpressJS / Luciad / Leaflet / HTML / CSS / Vite /
            PostgreSQL / Java / OGC Standards / GIS / Linux
          </div>
          <div className='about-content-cert'>
            Certified in:&nbsp;
            <a
              title='https://www.credly.com'
              href='https://www.credly.com/badges/812211e2-fc9b-4b87-9922-ca0e9bbd92e0/public_url'
              target='_blank'
              rel='noopener noreferrer'
            >
              Microsoft Azure Fundamentals (AZ-900)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
