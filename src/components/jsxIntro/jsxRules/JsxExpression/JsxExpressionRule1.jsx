const JsxExpressionRule1 = () => {
  return (
    <div>
      <h4>Rule 6.1 </h4>
      we should not write console statement in jsx as it will not get dispalyed in the browser
      <div>{console.log('hello world')}</div>
      we cannot write any conditions except ternary operator
    </div>
  );
};
export default JsxExpressionRule1;
