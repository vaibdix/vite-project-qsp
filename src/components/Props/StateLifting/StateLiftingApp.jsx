import { useState } from 'react';
import StateLiftingChild from './StateLiftingChild';

const StateLiftingApp = (props) => {
  const [name, setName] = useState('');

  // Nothing but sending data from child to parent component

  return (
    <div>
      <h1>StateLiftingApp</h1>
      <StateLiftingChild name={name} setName={setName} />
      <p>In Parent Compo : {name}</p>
    </div>
  );
};
export default StateLiftingApp;
