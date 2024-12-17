const StateLiftingChild = (props) => {
  return (
    <div>
      <h3>StateLiftingChild</h3>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>In Child Compo : {props.name}</p>
    </div>
  );
};
export default StateLiftingChild;
