const Task7 = () => {
  const handleMouseMove = (e) => {
    const dot = document.querySelector('.dot');
    if (dot) {
      // Get container's bounding rectangle
      const container = e.currentTarget.getBoundingClientRect();
      // Calculate relative position within the container
      const x = e.clientX - container.left;
      const y = e.clientY - container.top;

      // Keep dot within container bounds
      dot.style.left = `${Math.min(Math.max(0, x), container.width - 20)}px`;
      dot.style.top = `${Math.min(Math.max(0, y), container.height - 20)}px`;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '200px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 0'
      }}
    >
      <div
        className="dot"
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'red',
          transition: 'all 0.1s ease',
        }}
      />
      <p style={{
        position: 'absolute',
        bottom: 10,
        left: 10,
        margin: 0
      }}>
        Wow, such skills! The dot is impressed.
      </p>
    </div>
  );
};

export default Task7;

///////////    USESTATE APPROACH    ///////////

// import { useState } from 'react';

// const Task7 = () => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   return (
//     <div
//       onMouseMove={(e) => setCoords({ x: e.clientX, y: e.clientY })}
//       style={{ height: '100vh' }}
//     >
//       <div
//         style={{
//           position: 'fixed',
//           left: coords.x,
//           top: coords.y,
//           width: '20px',
//           height: '20px',
//           background: 'red',
//           borderRadius: '50%',
//           transform: 'translate(-50%, -50%)',
//           pointerEvents: 'none'
//         }}
//       />
//       <p style={{ position: 'fixed', bottom: 20 }}>
//         Wow, such skills! 🎯
//       </p>
//     </div>
//   );
// };

// export default Task7;
