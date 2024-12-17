const PropsChildren = (props) => {
  return (
    <>
      <h3>Props Children</h3>
      {props.logoImage && <img src={props.logoImage} alt="single store logo" />}
      {props.children}
    </>
  );
};

export default PropsChildren;
