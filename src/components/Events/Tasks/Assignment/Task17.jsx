import React, { useState } from 'react';

const Task17 = () => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEEAD',
    '#D4A5A5',
    '#9B59B6',
    '#E67E22',
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((prevIndex) =>
      (prevIndex + 1) % colors.length
    );
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: colors[currentColorIndex],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      I'm a chameleon, can't catch me! 🦎
    </div>
  );
};

export default Task17;