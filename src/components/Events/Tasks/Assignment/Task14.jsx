import React, { useState } from 'react';

const Task14 = () => {
  const [backgroundColor, setBackgroundColor] = useState('#B09382');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        color: '#fff',
        backgroundColor: backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          color: '#fff',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}
      >
        <h3 style={{ marginBottom: '10px', fontSize: '1.2em', color: '#fff' }}>
          Scroll to change my vibe! 🎨
        </h3>
        <p style={{ fontSize: '0.9em' }}>Current Color: {backgroundColor}</p>
      </div>

      <div
        style={{
          marginTop: '15px',
        }}
      >
        <span style={{ color: '#fff', fontSize: '24px' }}>⭮</span>
      </div>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Task14;