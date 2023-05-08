import React from 'react';

function WorkItem({ work }) {
  return work ? (
    <div className='work-item'>
      <p className='work-position'>
        <span>{work.position}</span> at {work.company}
      </p>
      <p className='work-tenure'>{work.tenure}</p>
      <ul>
        {work.description.map((line, index) => (
          <li key={work.company + index}>{line}</li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
}

export default WorkItem;
