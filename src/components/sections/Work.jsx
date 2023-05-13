import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import DataContext from '../../context/DataContext';
import './Work.css';
import WorkItem from './WorkItem';

function Work() {
  const { work, worklist, setWork, skillset } = useContext(DataContext);
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
    const sectionElements = document.querySelectorAll('.work-li, .skill-icon');
    sectionElements.forEach((el) => observer.observe(el));
  }, [work]);

  const selectWork = (workitem) => {
    setWork(workitem);
  };
  return work ? (
    <div id='work-section' className='section work-section hide-for-show'>
      <section>
        <h3 id='work-title'>Working Experience</h3>
        <div className='work-content'>
          <nav>
            {worklist.map((workitem) => (
              <span
                className={work.company == workitem.company ? 'active' : ''}
                key={workitem.id}
                onClick={() => selectWork(workitem)}
              >
                {workitem.company}
              </span>
            ))}
          </nav>
          <WorkItem work={work} skillset={skillset} />
        </div>
      </section>
    </div>
  ) : (
    <>Rendering</>
  );
}

export default Work;
