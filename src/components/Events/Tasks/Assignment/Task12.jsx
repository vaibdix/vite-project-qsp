import React, { useState } from 'react';

const Task12 = () => {
  const [isIdle, setIsIdle] = useState(false);
  let timeoutId = null;

  const handleActivity = () => {

    clearTimeout(timeoutId);
    setIsIdle(false);

  
    timeoutId = setTimeout(() => {
      setIsIdle(true);
    }, 5000);
  };

  return (
    <div
      onMouseMove={handleActivity}
      style={{
        padding: '20px',
        border: '1px solid #ccc',
        margin: '0px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: isIdle ? '#ffe6e6' : '#fff',
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>Idle Detection Zone</h3>
      {isIdle ? (
        <div style={{
          fontSize: '18px',
          color: '#ff4444',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-in'
        }}>
          Hello? Are you there? React is getting lonely. 😢
        </div>
      ) : (
        <div style={{
          fontSize: '16px',
          color: '#666',
          textAlign: 'center'
        }}>
          Move your mouse here! Stay still for 5 seconds to see what happens.
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Task12;