import React from 'react';

function WorkItem({ work, skillset }) {
  return work ? (
    <div className='work-item'>
      <p className='work-position'>
        {work.position} at{' '}
        <a
          title={work.website}
          href={work.website}
          target='_blank'
          rel='noopener noreferrer'
        >
          {work.company}
        </a>
      </p>
      <p className='work-tenure'>{work.tenure}</p>
      <ul>
        {work.description.map((line, index) => (
          <li className='work-li hide-for-show' key={work.company + index}>
            {line}
          </li>
        ))}
      </ul>
      <div className='work-content-skills'>
        {skillset.map((skill) => {
          if (skill.company.includes(work.companyCode)) {
            return (
              <span
                key={skill.skill}
                className={`${skill.type} skill-icon hide-for-show`}
              >
                {skill.skill}
              </span>
            );
          }
        })}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default WorkItem;
