const JsxExpressionRule2 = () => {
  const mode = 'light';
  return (
    <div>
      <h4>Rule 6.2 </h4>
      {/* wont work */}
      {/* <h4>{ if(mode === "dark") { return <p>SUN</p> }else { return <p>MOON</p> } }</h4> */}

      {/* will work */}
      <h4>{mode === 'dark' ? <p>SUN</p> : <p>Moon</p>}</h4>
      <p>
        we cannot write conditional statement except ternary operator and shortcircuit operator --
        ie true false or && ||
      </p>
    </div>
  );
};
export default JsxExpressionRule2;
