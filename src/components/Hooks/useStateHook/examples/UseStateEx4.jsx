import { useState } from 'react';

function UseStateEx4() {
  const [isCircle, setIsCircle] = useState(false);

  const shapeStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    borderRadius: isCircle ? '50%' : '0',
  };

  return (
    <div>
      <div style={shapeStyle}></div>
      <button onClick={() => setIsCircle(!isCircle)}>
        Change to {isCircle ? 'Box' : 'Circle'}
      </button>
    </div>
  );
}

export default UseStateEx4;
