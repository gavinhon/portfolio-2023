import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Work.css';
import WorkItem from './WorkItem';

function Work() {
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
        'Frontend development and optimization of a 3D web map using open source technology in collaboration with designer and product owner.',
        'Built automated processes for data processing according to application requirements.',
        'Engaging public and private sectors with sales team to come up with proof-of-concept.',
        'Research on potential improvement in the usage of 3D data and emerging open source libraries based on OGC standards.',
      ],
    },
    {
      id: 3,
      company: 'Micron Technology',
      position: 'IT Engineer',
      tenure: 'September 2017 - October 2019',
      website: 'https://www.micron.com/',
      description: [
        'Develop, test, deploy and maintenance of applications used by manufacturing tools.',
        'Develop automated solutions in work process through scripting for manufacturing stakeholders and IT team.',
        'Perform testing, deployment and maintenance of vendor products.',
        'Provide L2 support for IT services.',
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
  const [work, setWork] = useState();
  useEffect(() => {
    setWork(worklist[0]);
  }, []);

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
      { threshold: 0.0 }
    );
    const sectionElements = document.querySelectorAll('.work-li');
    sectionElements.forEach((el) => observer.observe(el));
  }, [work]);

  const selectWork = (workitem) => {
    setWork(workitem);
  };
  return work ? (
    <div id='work-section' className='section work-section'>
      <section>
        <h3 id='work-title'>Working Experience</h3>
        <div className='work-content'>
          <nav>
            {worklist.map((workitem) => (
              <a
                className={work.company == workitem.company ? 'active' : ''}
                key={workitem.id}
                onClick={() => selectWork(workitem)}
              >
                {workitem.company}
              </a>
            ))}
          </nav>
          <WorkItem work={work} />
        </div>
      </section>
    </div>
  ) : (
    <>Rendering</>
  );
}

export default Work;
