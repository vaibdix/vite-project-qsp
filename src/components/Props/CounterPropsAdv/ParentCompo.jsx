import { useState } from 'react';
import Button from './Button';

const ParentCompo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>Advanced Counter using props</h3>
      <Button increment={handleClick} text="Click Me">
        <h3> {count} </h3>
      </Button>
    </>
  );
};
export default ParentCompo;
