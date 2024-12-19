const Task1 = () => {
  const handleDoubleClick = (e) => {
    e.target.style.backgroundColor = '#e6ffe6';
    e.target.textContent = "Shh! I'm a React developer undercover!";
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{
        padding: '20px',
        border: '1px solid #ccc',
        cursor: 'pointer',
        backgroundColor: '#fff',
      }}
    >
      Double click to reveal the secret message
    </div>
  );
};

export default Task1;

///////////    USESTATE APPROACH    ///////////

// import React, { useState } from 'react';

// const Task1 = () => {
//   const [isRevealed, setIsRevealed] = useState(false);

//   const handleDoubleClick = () => {
//     setIsRevealed(true);
//   };

//   return (
//     <div
//       onDoubleClick={handleDoubleClick}
//       style={{
//         padding: '20px',
//         border: '1px solid #ccc',
//         cursor: 'pointer',
//         backgroundColor: isRevealed ? '#e6ffe6' : '#fff',
//       }}
//     >
//       {isRevealed
//         ? "Shh! I'm a React developer undercover!"
//         : 'Double click to reveal the secret message'}
//     </div>
//   );
// };

// export default Task1;
