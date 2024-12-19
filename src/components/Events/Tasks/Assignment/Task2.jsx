import plant from '../../../../assets/plant.svg';

const Task2 = () => {
  const handleMouseEvent = (e) => {
    if (e.type === 'mouseenter') {
      e.target.style.transform = 'scale(1.25)';
    } else {
      e.target.style.transform = 'scale(1)';
    }
  };

  return (
    <div className="flex justify-center p-5">
      <img
        src={plant}
        alt="plant"
        className="w-32 transition-transform duration-300 ease-in-out"
        onMouseEnter={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
      />
    </div>
  );
};

export default Task2;

///////////    USESTATE APPROACH    ///////////

// const Task2 = () => {
//   const [isGrowing, setIsGrowing] = useState(false);

//   return (
//     <>
//       <h3>Task 2</h3>
//       <div className="flex justify-center p-5">
//         <img
//           src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300"
//           alt="plant"
//           className={`w-48 transition-transform duration-300 ease-in-out
//             ${isGrowing ? 'scale-125' : 'scale-100'}`}
//           onMouseEnter={() => setIsGrowing(true)}
//           onMouseLeave={() => setIsGrowing(false)}
//         />
//       </div>
//     </>
//   );
// };

// export default Task2;
