import React, { useState } from 'react';

const Task18 = () => {
  const [touchedWall, setTouchedWall] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleWallTouch = () => {
    setTouchedWall(true);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setTouchedWall(false);
    }, 2000);
  };

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      position: 'relative'
    }}>

      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#fff',
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>

        <div style={{
          position: 'absolute',
          left: 0,
          top: '40%',
          width: '20%',
          height: '20%',
          backgroundColor: '#4CAF50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px'
        }}>
          Start
        </div>

        <div style={{
          position: 'absolute',
          right: 0,
          top: '40%',
          width: '20%',
          height: '20%',
          backgroundColor: '#E91E63',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px'
        }}>
          End
        </div>

        <div
          onMouseEnter={handleWallTouch}
          style={{
            position: 'absolute',
            left: '30%',
            top: 0,
            width: '10px',
            height: '70%',
            backgroundColor: touchedWall ? '#ff4444' : '#333',
            transition: 'background-color 0.3s'
          }}
        />

        <div
          onMouseEnter={handleWallTouch}
          style={{
            position: 'absolute',
            right: '30%',
            bottom: 0,
            width: '10px',
            height: '70%',
            backgroundColor: touchedWall ? '#ff4444' : '#333',
            transition: 'background-color 0.3s'
          }}
        />

        <div style={{
          position: 'absolute',
          left: '20%',
          top: '45%',
          width: '60%',
          height: '10%',
          backgroundColor: 'transparent',
          zIndex: 1
        }}/>

        {showMessage && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 68, 68, 0.9)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            animation: 'fadeIn 0.3s',
            zIndex: 2
          }}>
            Oops! Walls hurt, don't they? 😅
          </div>
        )}
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '14px',
        color: '#666'
      }}>
        Hover from Start to End without touching the walls!
      </div>

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

export default Task18;