const ColorBox = ({ dataColor }) => {
  console.log(dataColor); // Check the dataColor prop value
  return (
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: dataColor || 'grey', // Fallback to grey if no color is provided
      }}
    ></div>
  );
};

export default ColorBox;
