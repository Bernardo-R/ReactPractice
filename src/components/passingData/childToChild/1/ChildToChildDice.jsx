import React from "react";

const ChildToChildDice = ({ callback }) => {
  return (
    <button onClick={() => callback(Math.floor(Math.random() * 6) + 1)}>
      Roll Dice
    </button>
  );
};

export default ChildToChildDice;
