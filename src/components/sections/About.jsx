import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import './About.css';

function About() {
  const { certifications, skillset } = useContext(DataContext);
  return (
    <div id='about-section' className='section about-section hide-for-show'>
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
            <p className='about-content-title'>Active skills:&nbsp;</p>
            {skillset.map((skill) => {
              if (skill.company.includes('hxgn')) {
                return (
                  <span
                    key={skill.skill}
                    className={`${skill.type} skill-icon`}
                  >
                    {skill.skill}
                  </span>
                );
              }
            })}
          </div>
          <div className='about-content-cert'>
            <p className='about-content-title'>Certified in:&nbsp;</p>
            {certifications.map((cert) => {
              return (
                <a
                  key={cert.cert}
                  className={`${cert.type} cert-icon`}
                  href={cert.proof}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {cert.cert}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
