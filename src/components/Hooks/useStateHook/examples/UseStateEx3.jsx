import { useState } from 'react';

const UseStateEx3 = () => {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = () => {
    const newColor = bgColor === 'white' ? 'lightblue' : 'white';
    setBgColor(newColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '10vh' }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

export default UseStateEx3;
