import { useState } from 'react';

const UseStateEx1 = () => {
  const [state, setState] = useState(0);
  // const [undefined, function] = useState(initialval)

  return (
    <>
      <h3>useStateEx1</h3>
      <h5>{state}</h5>
      <button onClick={() => setState(state + 1)}>Increment</button>
      {/* changes in state will rerender your entire component */}
      {/* there is no state in state based components -- ie stateless */}
      {/* to make things statfull in funx based component make use of useState */}

      {/* INTERNAL useState hook */}
      {/* let useStateEx1 = (a) => {
        let useMyState = (a) => {
          // modify current state code
        },
        return [a, setMyState];
      }; */}

    </>
  );
};

export default UseStateEx1;
