import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Counter = () => {
  const num = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
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
