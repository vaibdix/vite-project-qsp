const Child = (props) => {
  // console.log(props.dataObj.name);

  const { name, mobile, qualification } = props.dataObj;
  const [namee, mobilee, qualificationn] = props.dataArr;

  return (
    <>
      {/* <h1>USING OBJECT</h1> */}
      {/* way one */}
      {/* <p>{props.dataObj.name}</p> */}
      {/* way two */}
      <h3>USING OBJECT</h3>
      <p>{name}</p>
      <p>{mobile}</p>
      <p>{qualification}</p>

      <h3>USING ARRAYS</h3>
      {/* way one */}
      <p>{namee}</p>
      <p>{mobilee}</p>
      <p>{qualificationn}</p>
    </>
  );
};

export default Child;
