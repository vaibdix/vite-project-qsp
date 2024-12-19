import { useState } from 'react';

const Task9 = () => {
  const [message, setMessage] = useState('');

  const handleVisibilityChange = (e) => {
    if (e.target.hidden) {
      setMessage("Don't leave me! 😢");
    } else {
      setMessage("Oh, you're back! 😍");
    }
  };

  document.onvisibilitychange = handleVisibilityChange;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Page Visibility Tracker</h2>
      <p style={{ fontSize: '24px' }}>{message}</p>
      <p>Try switching to another tab!</p>
    </div>
  );
};

export default Task9;
