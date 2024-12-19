const Task3 = () => {
  const handleRightClick = (e) => {
    e.preventDefault(); // Prevents the default context menu
    alert('Ha! You thought you could outsmart React?');
  };

  return (
    <button
      onContextMenu={handleRightClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Right-Click Me
    </button>
  );
};

export default Task3;

///////////    USESTATE APPROACH    ///////////

// import React, { useState } from 'react';

// const Task3 = () => {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleRightClick = (e) => {
//     e.preventDefault(); // Prevents the default context menu
//     setShowAlert(true);
//     alert("Ha! You thought you could outsmart React?");
//   };

//   return (
//     <button
//       onContextMenu={handleRightClick}
//       style={{
//         padding: '10px 20px',
//         backgroundColor: '#007bff',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer'
//       }}
//     >
//       Right-Click Me UseState
//     </button>
//   );
// };

// export default Task3;
