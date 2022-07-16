import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <div>
        <h1>{num}</h1>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
