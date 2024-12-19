import React, { useState } from 'react';

const Task19 = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [message, setMessage] = useState('');

  const lazyResponses = [
    "Huh? Oh, sorry, I was on a break.",
  ];

  const handleClick = () => {
    if (isWaiting) return;

    setIsWaiting(true);
    setMessage('');

    const delay = 1000 + Math.random() * 2000;

    setTimeout(() => {
      const randomResponse = lazyResponses[Math.floor(Math.random() * lazyResponses.length)];
      setMessage(randomResponse);
      setIsWaiting(false);
    }, delay);
  };

  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A691B9',
    }}>
      <button
        onClick={handleClick}
        disabled={isWaiting}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: isWaiting ? 'wait' : 'pointer',
          backgroundColor: isWaiting ? '#cccccc' : '#D39C97',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s'
        }}
      >
        {isWaiting ? '💤 Zzzz...' : 'Click Me'}
      </button>

      {message && (
        <div style={{
          
          color: '#fff',
          fontStyle: 'italic',
          animation: 'fadeIn 0.5s'
        }}>
          {message}
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

export default Task19;