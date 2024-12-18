import { useState } from 'react';
import './styles.css';

const BoxGrid = () => {
  const [hoveredBoxes, setHoveredBoxes] = useState([]);

  return (
    <div className="grid-container">
      {Array.from({ length: 4500 }).map((_, index) => (
        <div
          key={index}
          className="grid-box"
          onMouseLeave={() => setHoveredBoxes(hoveredBoxes.concat(index))}
          style={{
            backgroundColor: hoveredBoxes.includes(index) ? '#fdba74' : '#b45309',
          }}
        />
      ))}
    </div>
  );
};

export default BoxGrid;
