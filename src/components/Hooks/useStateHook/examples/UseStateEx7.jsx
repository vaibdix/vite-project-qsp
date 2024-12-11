import { useState } from 'react';

const UseStateEx7 = () => {
  const [person, setPerson] = useState({
    name: 'John',
    age: 25,
    profession: 'Developer',
    skills: 'React',
  });

  return (
    <>
      <h3>useStateEx7</h3>
      <div>
        {Object.entries(person).map(([key, value], idx) => (
          <h5 key={idx}>
            {key}: {value}
          </h5>
        ))}
      </div>
    </>
  );
};

export default UseStateEx7;
