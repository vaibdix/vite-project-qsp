// const EventsEx2 = () => {

//   let demo = () => {
//     console.log('demo triggered');
//   }

//   return (
//     <div>
//       <h1>Events Example 2</h1>
//       <button className="bg-purple-500 px-3 rounded-full text-white" onClick={demo} >Click me</button>
//     </div>
//   );
// };
// export default EventsEx2;





// const EventsEx2 = () => {
//   let demo = (e) => {
//     console.log('demo triggered');
//   };

//   return (
//     <div>
//       <h1>Events Example 2</h1>
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

//       <button
//         className="bg-purple-500 px-3 rounded-full text-white"
//         onClick={(e) => {console.log(e)}}>
//           Click me
//       </button>
//     </div>
//   );
// };
// export default EventsEx2;



const EventsEx2 = () => {
  let demo = (e) => {
    console.log('demo triggered');
  };

  return (
    <div>
      <h1>Events Example 2</h1>
      <button
        onClick={(e) => {
          e.target.textContent = 'Clicked by You';
          e.target.style.backgroundColor = 'green';
          console.log(e);
        }}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">
          Default
        </button>

    </div>
  );
};
export default EventsEx2;