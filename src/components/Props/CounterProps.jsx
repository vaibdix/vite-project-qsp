const CounterProps = (x) => {
  console.log(x.children);
  return (
    <div>
      <h3>SENDING FUNCTION AS PROPS</h3>
      <button
        onClick={() => {
          x.data();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default CounterProps;
