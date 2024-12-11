import UseStateEx1 from './examples/useStateEx1';
import UseStateEx2 from './examples/UseStateEx2';
import UseStateEx3 from './examples/UseStateEx3';
import UseStateEx4 from './examples/UseStateEx4';
import UseStateEx5 from './examples/UseStateEx5';
import UseStateEx6 from './examples/UseStateEx6';
import UseStateEx7 from './examples/UseStateEx7';
import UseStateEx8 from './examples/UseStateEx8';
import UseStateEx9 from './examples/UseStateEx9';

const UseStateIntro = () => {
  return (
    <>
      <h3>UseStateIntro</h3>
      <h5>what is hook</h5>
      <p>hooks are nothing but inbuilt methods or functions</p>
      <p>hooks names start with Use</p>
      <p>
        eg useState, useEffect, useContext, useDispatch, useReducer, useCallback, useMemo, useRef,
        useLayouEffect
      </p>
      <p>we can create any function and will name it useXyz</p>
      <p>
        such functions can be treated as <u>custom Hooks</u>
      </p>
      {/* <p>let useAddition=(a,b) => {return a+b}</p> */}

      <br />
      <UseStateEx1 />
      <UseStateEx2 />
      <UseStateEx3 />
      <UseStateEx4 />
      <UseStateEx5 />
      <UseStateEx6 />
      <UseStateEx7 />
      <UseStateEx8 />
      <UseStateEx9 />
    </>
  );
};

export default UseStateIntro;
