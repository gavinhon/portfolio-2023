import { createContext, useEffect, useState } from 'react';

const worklist = [
  {
    id: 1,
    company: 'Hexagon',
    companyCode: 'hxgn',
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
    companyCode: 'sla',
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
    companyCode: 'mi',
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
    companyCode: 'ste',
    position: 'Project Assistant',
    tenure: 'April 2011 - August 2011, May 2015 - July 2015',
    website: 'https://www.stengg.com/',
    description: [
      '2015 - Under the department of Radar Systems Integrations (RSI)',
      'Develop C# application to integrate CCTV camera and assist with project testing of Radars.',
      '2011 - Under the department of Sensor Business Group (SBG) working on AgilFence (PIDS)',
      'Conduct site survey, product testing and tasked with learning the manufacturing procedure and guiding technicians.',
    ],
  },
];
const skillset = [
  { id: 0, type: 'gis', company: ['sla', 'hxgn'], skill: 'Geospatial' },
  { id: 1, type: 'gis', company: ['sla', 'hxgn'], skill: 'OGC Standards' },
  { id: 2, type: 'gis', company: ['sla'], skill: 'CesiumJS' },
  { id: 3, type: 'gis', company: ['sla'], skill: 'Leaflet' },
  { id: 4, type: 'gis', company: ['hxgn'], skill: 'Luciad' },
  { id: 5, type: 'dev', company: ['sla', 'hxgn'], skill: 'Javascript' },
  { id: 6, type: 'dev', company: ['hxgn'], skill: 'ReactJS' },
  { id: 7, type: 'dev', company: ['sla', 'hxgn'], skill: 'NodeJS' },
  { id: 8, type: 'dev', company: ['sla', 'hxgn'], skill: 'ExpressJS' },
  { id: 9, type: 'dev', company: ['sla', 'hxgn'], skill: 'CSS' },
  { id: 10, type: 'dev', company: ['sla', 'hxgn'], skill: 'HTML' },
  { id: 11, type: 'dev', company: ['hxgn'], skill: 'Linux' },
  { id: 12, type: 'dev', company: ['hxgn'], skill: 'Windows Server' },
  { id: 13, type: 'dev', company: ['sla', 'hxgn'], skill: 'PostgreSQL' },
  { id: 14, type: 'dev', company: ['hxgn'], skill: 'Java' },
  { id: 15, type: 'dev', company: ['hxgn'], skill: 'Vite' },
  { id: 16, type: 'presales', company: ['hxgn'], skill: 'Presales' },
  {
    id: 17,
    type: 'presales',
    company: ['sla', 'hxgn'],
    skill: 'Product Demo',
  },
  { id: 18, type: 'presales', company: ['hxgn'], skill: 'Customer Training' },
  { id: 19, type: 'presales', company: ['sla'], skill: 'Government' },
  { id: 20, type: 'dev', company: ['mi'], skill: 'Perl' },
  { id: 21, type: 'dev', company: ['mi', 'ste'], skill: 'C#' },
  { id: 22, type: 'dev', company: ['mi'], skill: 'DevOps' },
  { id: 23, type: 'dev', company: ['mi'], skill: 'Agile' },
  { id: 24, type: 'dev', company: ['mi'], skill: 'L2 Support' },
  { id: 25, type: 'dev', company: ['mi'], skill: 'Automation' },
  { id: 26, type: 'dev', company: ['ste'], skill: 'Intern' },
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

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [work, setWork] = useState();
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
      { threshold: 0.5 }
    );
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach((el) => observer.observe(el));
  }, [work]);

  return (
    <DataContext.Provider
      value={{
        work,
        setWork,
        worklist,
        skillset,
        certifications,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
