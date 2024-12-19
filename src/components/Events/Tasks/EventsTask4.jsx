import { useState } from 'react';

const EventTask4 = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white text-center">
          Login Form
        </h2>
        <form>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your username
            </label>
            <input
              onChange={handleInput}
              value={userInput.username}
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              onChange={handleInput}
              value={userInput.password}
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
        <div className="mt-5 bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Entered Data:</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Username:</strong> {userInput.username || 'Not provided'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Password:</strong> {userInput.password || 'Not provided'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventTask4;




///////////////////////    CODE ONLY    ///////////////////////



// Dynamic State Updates:
// handleChange dynamically updates the state based on the name and value properties of the input elements.
// It uses the name attribute of the input (e.target.name) to determine which field (username or password) to update in the userInput object.

// State Spread Syntax:
// The spread operator (...userInput) is used to preserve the existing state values while updating only the specific field being edited.

// Asynchronous Behavior of setUserInput:
//setUserInput does not immediately update the state. React batches state updates for performance reasons, so the console.log(userInput) in the same function may log the previous state instead of the updated one.

// Two-Way Binding Potential:
// Since the state is tied to the value attribute of input fields, this enables two-way binding. Changes in the input fields update the state, and changes in the state can reflect back in the input fields.



// const EventTask4 = () => {
//   const [userInput, setUserInput] = useState({
//     username: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserInput({ ...userInput, [name]: value });
//     console.log(userInput);
//   };

//   return (
//     <>
//       <form>
//         <label htmlFor="email" />
//         <input
//           onChange={handleChange}
//           value={userInput.username}
//           name="username"
//           id="email"
//           type="text"
//         />
//         <label htmlFor="password" />
//         <input
//           onChange={handleChange}
//           value={userInput.password}
//           name="password"
//           id="password"
//           type="password"
//         />
//         <button type="submit"> Submit </button>
//       </form>
//       <div>
//         <p>{userInput.username}</p>
//         <p>{userInput.password}</p>
//       </div>
//     </>
//   );
// };

// export default EventTask4;
