import React, { useState } from 'react';

function TimerBomb() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [status, setStatus] = useState('inactive');
  const [timerId, setTimerId] = useState(null);

  const startBomb = () => {
    if (!isActive) {
      setIsActive(true);
      setStatus('active');
      setTimeLeft(10);

      const newTimerId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(newTimerId);
            setStatus('exploded');
            setIsActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      setTimerId(newTimerId);
    }
  };

  const defuseBomb = () => {
    if (isActive) {
      clearInterval(timerId);
      setIsActive(false);
      setStatus('defused');
      setTimerId(null);
    }
  };

  return (
    <div className="flex flex-col items-center text-center bg-gray-200 py-2">
      <h2 className="text-xl font-bold mb-6">Timer Bomb</h2>

      {status === 'exploded' ? (
        <div className="flex flex-col items-center ">
          <h1 className="text-xl font-bold text-red-600">💥 BOOM! 💥</h1>
          <button
            onClick={() => setStatus('inactive')}
            className="px-3 py-1 bg-green-500 text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      ) : status === 'defused' ? (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-xl text-green-600">😅 Bomb Defused! 😅</h1>
          <button
            onClick={() => setStatus('inactive')}
            className="px-3 py-1 bg-green-500 text-white rounded-lg"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          {isActive && (
            <div className="text-3xl text-red-600">{timeLeft}</div>
          )}
          <button
            className={`px-4 py-2 text-lg font-semibold text-white
              ${isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'}`}
            onClick={startBomb}
            onDoubleClick={defuseBomb}
          >
            {isActive ? 'Double-Click to Defuse!' : 'Click to Start Bomb'}
          </button>
        </div>
      )}

      <div className="mt-5 p-3 bg-white w-80">
        <ul className="space-y-2 text-left text-sm">
          <li className="flex items-center space-x-2">
            <span className="text-red-500">1.</span>
            <span>Click the button to start the bomb</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-red-500">2.</span>
            <span>Double-click to defuse before time runs out!</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TimerBomb;
