const Task5 = () => {
  const moveButton = (e) => {
    const button = e.target;
    button.style.left = Math.random() * 90 + 'vw';
    button.style.top = Math.random() * 90 + 'vh';
  };

  return (
    <button
      className="text-white bg-gray-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800"
      onMouseEnter={moveButton}
      style={{
        position: 'fixed',
        cursor: 'pointer',
        transition: '0.2s',
      }}
    >
      Catch me!
    </button>
  );
};

export default Task5;

///////////    USESTATE APPROACH    ///////////

// import { useState } from 'react';
// const Task5 = () => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   const moveButton = () => {
//     setCoords({
//       x: Math.random() * 90,
//       y: Math.random() * 90
//     });
//   };

//   return (
//     <button
//       className="text-white bg-gray-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800"
//       onMouseEnter={moveButton}
//       style={{
//         position: 'fixed',
//         left: `${coords.x}vw`,
//         top: `${coords.y}vh`,
//         cursor: 'pointer',
//         transition: '0.2s',
//       }}
//     >
//       Catch me!
//     </button>
//   );
// };

// export default Task5;
