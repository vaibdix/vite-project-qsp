// EVENTS ASSIGNMENT TASK 1 -- using events and target

const EventsTask1 = () => {
  const handleClick = (e) => {
    console.log(e);
    e.target.disabled = true;
    e.target.style.background = 'red';
    e.target.textContent = 'btn disabled';
  };

  return (
    <div>
      <button
        className="text-white bg-gray-800  focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 "
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default EventsTask1;

// EVENTS ASSIGNMENT TASK 1 -- using USESTATE HOOK

// import React, { useState } from 'react';
// const EventsTask1 = () => {
//   const [isDisabled, setIsDisabled] = useState(false);
//   const handleClick = () => {
//     setIsDisabled(true);
//   };
//   return (
//     <div>
//       <button
//         className="text-white bg-gray-800  focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 "
//         onClick={handleClick}
//         disabled={isDisabled}
//       >
//         {isDisabled ? 'Button Disabled' : 'Think Before You Click'}
//       </button>
//     </div>
//   );
// };
// export default EventsTask1;
