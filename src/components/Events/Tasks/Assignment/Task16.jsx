import React, { useState } from 'react';

const Task16 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleRightClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setPosition({ x: e.clientX, y: e.clientY });

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const containerStyle = {
    backgroundColor: '#436374',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const popupStyle = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    padding: '10px',
    backgroundColor: '#fff',
    color: '#436374',
  };

  return (
    <>
      <div onContextMenu={handleRightClick} style={containerStyle}>
        Right-click anywhere in this box!
      </div>

      {showPopup && (
        <div style={popupStyle}>
          😜 Didn't expect me, huh?
        </div>
      )}
    </>
  );
};

export default Task16;