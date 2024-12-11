import { useState } from 'react';

const UseStateEx6 = () => {
  const courses = useState(['html', 'JS', 'react', 'css']);
  console.log(courses);
  return (
    <>
      <h3>useStateEx6</h3>
      <div>
        {courses.map((el, idx) => (
          <h5 key={idx}>{el}</h5>
        ))}
      </div>
    </>
  );
};

export default UseStateEx6;
