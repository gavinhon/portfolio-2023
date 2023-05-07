import React from 'react';

function WorkItem({ work }) {
  const handleSwipe = (e) => {
    const touchStartX = e.changedTouches[0].clientX;
    const touchEndX = e.changedTouches[0].clientX;
    const swipeThreshold = 50; // Adjust this value as needed

    if (touchStartX - touchEndX > swipeThreshold) {
      // Swipe left
      console.log('Swiped left');
    } else if (touchEndX - touchStartX > swipeThreshold) {
      // Swipe right
      console.log('Swiped right');
    }
  };

  return work ? (
    <div
      className='work-item'
      onTouchStart={handleSwipe}
      onTouchEnd={handleSwipe}
    >
      <p className='work-position'>
        {work.position} @ {work.company}
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
