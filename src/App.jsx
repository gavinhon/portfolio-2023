import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Footer from './components/sections/Footer';

function App() {
  const worklist = [
    {
      id: 1,
      company: 'Hexagon',
      position: 'Presales Engineer',
      tenure: 'November 2022 - Present',
      website: 'https://hexagon.com/',
      description: [
        'Develop demonstration, sample and proof-of-concept applications.',
        'Provide training and consultancy services for customers to support them.',
        'Provide technical presentations to clients about the Hexagon products.',
        'Create technical documents and internal presentations on product capabilities and competitive advantages to share with the team.',
      ],
    },
    {
      id: 2,
      company: 'Singapore Land Authority',
      position: 'Principal Geospatial Specialist',
      tenure: 'November 2019 - November 2022',
      website: 'https://www.sla.gov.sg/',
      description: [
        'Develop and optimize a 3D web map using open source technology.',
        'Create automated processes for data processing.',
        'Collaborate with sales to engage public and private sectors in proof-of-concept development.',
        'Conduct research on utilizing 3D data and emerging open source libraries based on OGC standards to identify potential improvements.',
      ],
      project: {
        url: 'https://www.onemap3d.gov.sg/main/',
        image:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sla.gov.sg%2Farticles%2Fpress-releases%2F2020%2Flaunch-of-onemap3d-beta-at-singapore-geospatial-week-2020&psig=AOvVaw1TSpWYhYdLOmTrsE-L8_vO&ust=1683821167364000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiv9uSQ6_4CFQAAAAAdAAAAABAE',
      },
    },
    {
      id: 3,
      company: 'Micron Technology',
      position: 'IT Engineer',
      tenure: 'September 2017 - October 2019',
      website: 'https://www.micron.com/',
      description: [
        'Develop, test, deploy, and maintain manufacturing tool applications.',
        'Implement automated solutions through scripting to optimize work processes for manufacturing stakeholders and the IT team.',
        'Conduct testing, deployment, and maintenance of vendor products.',
        'Offer Level 2 (L2) support for IT services.',
      ],
    },
    {
      id: 4,
      company: 'ST Engineering',
      position: 'Project Assistant',
      tenure: 'April 2011 - August 2011, May 2015 - July 2015',
      website: 'https://www.stengg.com/',
      description: [
        '2015 - Under the department of Radar Systems Integrations (RSI)',
        'Develop C# application to integrate CCTV camera',
        '2011 - Under the department of Sensor Business Group (SBG) working on AgilFence (PIDS)',
        'Conduct site survey and product testing.',
      ],
    },
  ];
  const skillset = [
    { id: 0, type: 'gis', skill: 'GIS' },
    { id: 1, type: 'gis', skill: 'OGC Standards' },
    { id: 2, type: 'gis', skill: 'CesiumJS' },
    { id: 3, type: 'gis', skill: 'Leaflet' },
    { id: 4, type: 'gis', skill: 'Luciad' },
    { id: 5, type: 'dev', skill: 'Javascript' },
    { id: 6, type: 'dev', skill: 'ReactJS' },
    { id: 7, type: 'dev', skill: 'NodeJS' },
    { id: 8, type: 'dev', skill: 'ExpressJS' },
    { id: 9, type: 'dev', skill: 'CSS' },
    { id: 10, type: 'dev', skill: 'HTML' },
    { id: 11, type: 'dev', skill: 'Linux' },
    { id: 12, type: 'dev', skill: 'Windows Server' },
    { id: 13, type: 'dev', skill: 'PostgreSQL' },
    { id: 14, type: 'dev', skill: 'Java' },
    { id: 15, type: 'dev', skill: 'Vite' },
    { id: 16, type: 'presales', skill: 'Presales' },
    { id: 17, type: 'presales', skill: 'Product Demo' },
    { id: 18, type: 'presales', skill: 'Customer Training' },
  ];
  const certifications = [
    {
      id: 1,
      type: 'cloud',
      cert: 'Microsoft Azure Fundamentals (AZ-900)',
      proof:
        'https://www.credly.com/badges/812211e2-fc9b-4b87-9922-ca0e9bbd92e0/public_url',
    },
  ];
  const [work, setWork] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 }
    );
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach((el) => observer.observe(el));
  }, [work]);
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Home />
        <About skillset={skillset} certifications={certifications} />
        <Work work={work} worklist={worklist} setWork={setWork} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
