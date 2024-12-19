import React, { useState } from 'react';

const Task15 = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  return (
    <div
      onMouseEnter={() => setIsBlurred(false)}
      onMouseLeave={() => setIsBlurred(true)}
      style={{
        width: '100%',
        height: '200px',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        backgroundColor: '#e6d5ac',
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        background: 'url("https://cdn.vectorstock.com/i/1000v/24/31/pirate-treasure-map-vector-31652431.jpg")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: isBlurred ? 'blur(5px)' : 'none',
        transition: 'filter 0.3s ease',
      }} />

      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        textAlign: 'center',
        transform: isBlurred ? 'translateY(100%)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}>
        X marks the React component
      </div>

      {isBlurred && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#000',
          textAlign: 'center',
        }}>
          Hover to reveal the treasure!
        </div>
      )}
    </div>
  );
};

export default Task15;