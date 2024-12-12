import { useState } from 'react';
import Child from './Child';
import CounterProps from './CounterProps';
import ColorBox from './ColorBox';

const PropsIntro = () => {
  const obj = {
    name: 'arvind',
    mobile: 12345675,
    qualification: 'MCA',
  };

  const arr = ['arvindArr', 12345678, 'bsc'];

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>PropsIntro</h1>
      {/* <Child name="arvind" /> */}

      {/* sending obj in props */}
      {/* <Child dataObj={obj} /> */}

      {/* sending array in props */}
      <Child dataArr={arr} dataObj={obj} />

      {/* passing Function as props */}
      {/* using self closing tag */}
      {count}
      {/* <CounterProps data={updateCount} /> */}

      {/* when sending data form non self closing tag */}
      {/* look in console */}
      <CounterProps data={updateCount}>asdasdcadcadc</CounterProps>

      {/* sending color as props */}
      <ColorBox dataColor="red" />
      <ColorBox dataColor="green" />
      <ColorBox dataColor="black" />
    </>
  );
};

export default PropsIntro;
