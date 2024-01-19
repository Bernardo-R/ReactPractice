import React, { useState } from "react";

const LifeCycleComponent = () => {
  const [showCounter, setShowCounter] = useState("false");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Life Cicle Component Practice</h1>
      <div>
        <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? "Show Counter" : "Hide Counter"}
        </button>
        <>
          {showCounter ? (
            <div>
              {`counter ${counter}`}
              <div>
                <button onClick={() => setCounter(counter + 1)}>Add 1</button>
                <button onClick={() => setCounter(0)}>Reset</button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      </div>
    </div>
  );
};

export default LifeCycleComponent;
