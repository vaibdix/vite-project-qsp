const Task7 = () => {
  const handleMouseMove = (e) => {
    const dot = document.querySelector('.dot');
    if (dot) {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    }
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      <div
        className="dot"
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'red',
          transition: 'all 0.1s ease',
        }}
      />
      <p style={{ position: 'fixed', bottom: 20, left: 20 }}>
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
