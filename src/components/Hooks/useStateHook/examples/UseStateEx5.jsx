import { useState } from 'react';

const UseStateEx5 = () => {
  const [change, setChange] = useState(false);

  const shapeStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    borderRadius: change ? '50%' : '0',
  };

  return (
    <div>
      <div style={shapeStyle}></div>
      <button onClick={() => setChange(!change)}>Change to {change ? 'Box' : 'Circle'}</button>
    </div>
  );
};

export default UseStateEx5;
