import React, { useState } from 'react';

const Task13 = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(251 146 60)',
    }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'rgb(254 215 170)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          animation: isShaking ? 'shake 0.5s infinite' : 'none',
          transition: 'transform 0.2s'
        }}
      >
        {isShaking ? "Stop tickling me! 😆" : "Hover over me!"}
      </div>

      <style>
        {`
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Task13;