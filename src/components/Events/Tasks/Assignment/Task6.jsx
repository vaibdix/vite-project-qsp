import React, { useState } from 'react';

const Task6 = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

  return (
    <div className=" bg-black text-white py-2 text-center font-bold">
      Window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}

export default Task6;
