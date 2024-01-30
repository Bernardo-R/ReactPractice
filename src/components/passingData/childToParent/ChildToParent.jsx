import React from "react";

const ChildToParent = ({ callback }) => {
  const data = 1234567;

  return (
    <div>
      <button onClick={() => callback(data)}>
        pass data to parent Component
      </button>
    </div>
  );
};

export default ChildToParent;
