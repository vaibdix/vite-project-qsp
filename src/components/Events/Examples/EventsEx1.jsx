const EventsEx1 = () => {
  const demo = (name) => {
    console.log('Hello', name);
  };

  return (
    <div>
      <h1>Events Example 1</h1>

      {/* <button className='bg-orange-300 px-3 mr-3' onClick={() => console.log('Hello')}>Click Me</button>
      <button className='bg-lime-300 px-3 mr-3' onMouseLeave={() => console.log('onMouseLeave')}>onMouseLeave</button>
      <button className='bg-cyan-300 px-3 mr-3' onMouseOver={() => console.log('onMouseOver')}>onMouseOver</button> */}


      <button className='bg-lime-300 px-3 mr-3' onClick={() => console.log('Hello World')}>Click Me</button>
    </div>
  );
};
export default EventsEx1;
