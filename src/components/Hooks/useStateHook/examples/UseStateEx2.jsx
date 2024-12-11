import { useState } from 'react';

const UseStateEx2 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>useStateEx2</h3>
      <h5>{count}</h5>
      {/* Give 30 as o/p as it take last val of setCount */}
      {/* <button
        onClick={() => {
          setCount(count + 10);
          setCount(count + 20);
          setCount(count + 30);
        }}
      >
        Increment
      </button> */}
      <button
        onClick={() => {
          setCount(count + 10);
          setCount((prevCount) => prevCount + 20);
          setCount((prevCount) => prevCount + 30);
          setCount(count + 30);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseStateEx2;
