import { useState } from 'react';

const UseStateEx9 = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'John',
      age: 25,
      profession: 'Developer',
    },
    {
      id: 2,
      name: 'Jane',
      age: 28,
      profession: 'Designer',
    },
    {
      id: 3,
      name: 'Mike',
      age: 30,
      profession: 'Manager',
    },
  ]);

  return (
    <>
      <h3>useStateEx9</h3>
      <div>
        {people.map((person) => (
          <div key={person.id}>
            <h5>Name: {person.name}</h5>
            <h5>Age: {person.age}</h5>
            <h5>Profession: {person.profession}</h5>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default UseStateEx9;
