const Button = (props) => {
  return (
    <>
      {props.children}
      <button onClick={props.increment}>{props.text}</button>
    </>
  );
};
export default Button;
