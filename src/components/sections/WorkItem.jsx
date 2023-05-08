import React from 'react';

function WorkItem({ work }) {
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
    </div>
  ) : (
    <></>
  );
}

export default WorkItem;
