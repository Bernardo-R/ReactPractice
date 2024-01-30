import React from "react";
import { useContext } from "react";

const ChildToChildCounter = () => {
  const { count, onIncrement, onDecremnet } = useContext();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecremnet}>-</button>
    </div>
  );
};

export default ChildToChildCounter;
