import UseStateEx1 from "./examples/useStateEx1";

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
    </>
  );
};

export default UseStateIntro;
