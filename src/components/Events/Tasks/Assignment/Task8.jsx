///////////    USESTATE APPROACH    ///////////

const Task8 = () => {
  const shake = (e) => {
    e.target.classList.add('shake');
    e.target.textContent = 'Nope! Try harder!';
    setTimeout(() => {
      e.target.classList.remove('shake');
    }, 500);
  };
  const buttonClass =
    'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700';

  return (
    <div
      style={{
        backgroundColor: 'wheat',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px',
      }}
    >
      <style>
        {`.shake { animation: shake 0.5s; }
          @keyframes shake {
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }`}
      </style>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <button onClick={shake} className={buttonClass}>
          Wrong
        </button>
        <button onClick={() => alert('Correct! 🎉')} className={buttonClass}>
          Right
        </button>
        <button onClick={shake} className={buttonClass}>
          Wrong
        </button>
      </div>
    </div>
  );
};

export default Task8;
