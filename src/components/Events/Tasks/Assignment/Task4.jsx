import React, { useState } from 'react';

const Task4 = () => {
  const [coords, setCoords] = useState('Move your mouse!');

  const handleMouseMove = (e) => {
    setCoords(`X: ${e.clientX}, Y: ${e.clientY}`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: '200px', border: '1px solid black', padding: '20px' }}
    >
      <h3>You're being watched! 👀</h3>
      <div>{coords}</div>
    </div>
  );
};

export default Task4;
