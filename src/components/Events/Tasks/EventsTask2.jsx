const EventsTask2 = () => {
  const handleOnMouseEnter = (e) => {
    console.log(e);
    e.target.style.background = 'red';
  };

  const handleOnMouseLeave = (e) => {
    console.log(e);
    e.target.style.background = 'magenta';
  };
  return (
    <div>
      <button id="eventsTask" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        Hover Me
      </button>
    </div>
  );
};

export default EventsTask2;
