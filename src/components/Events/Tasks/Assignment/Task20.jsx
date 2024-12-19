import React, { useState } from 'react';

const Task20 = () => {
  const [text, setText] = useState('Hover, right-click, or double-click me!');

  const handleMouseEnter = () => {
    setText('Cloudy vibes today.');
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setText('Storm incoming!');
  };

  const handleDoubleClick = () => {
    setText('Sunny and happy!');
  };

  const handleMouseLeave = () => {
    setText('Hover, right-click, or double-click me!');
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: '#9B8A50',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        userSelect: 'none',
        cursor: 'pointer'
      }}
    >
      {text}
    </div>
  );
};

export default Task20;