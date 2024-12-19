import React, { useState } from 'react';

const Task10 = () => {
  const [isRainbow, setIsRainbow] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  let interval;

  const startRainbow = () => {
    interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);
  };

  const stopRainbow = () => {
    clearInterval(interval);
  };

  const toggleRainbow = () => {
    if (isRainbow) {
      stopRainbow();
    } else {
      startRainbow();
    }
    setIsRainbow(!isRainbow);
  };

  return (
    <div style={{ backgroundColor: isRainbow ? colors[colorIndex] : 'white', textAlign: 'center' }}>
      <button onClick={toggleRainbow}>
        {isRainbow ? 'Stop Rainbow' : 'Start Rainbow'}
      </button>
      <p>The rainbow respects your vibe.</p>
    </div>
  );
};

export default Task10;