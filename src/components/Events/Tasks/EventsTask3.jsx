import { useState } from 'react';

const EventsTask3 = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <div>
      <form action="">
        <input onChange={(e) => setUserInput(e.target.value)} type="text" name="" id="" />
        <button className="bg-indigo-300 px-3 py-2 outline-3">Click Me</button>
      </form>
      {userInput}
      <h1>adca</h1>
      <h5>adca</h5>
    </div>
  );
};

export default EventsTask3;
