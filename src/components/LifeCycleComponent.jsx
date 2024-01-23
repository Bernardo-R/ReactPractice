import React, { useEffect, useState } from "react";

const LifeCycleComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("component has mounted");
    return () => {
      console.log("component has unmounted");
    };
  }, [counter]);

  return (
    <div>
      <div>
        <h2>Count</h2>
        <p>
          <b>Current Count:</b> {counter}
        </p>
        <div>
          <button onClick={() => setCounter(counter + 1)}>Add 1</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default LifeCycleComponent;
