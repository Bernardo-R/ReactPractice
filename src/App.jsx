import React from "react";
import reactLogo from "./assets/react.svg";
import { useState, createContext } from "react";
import viteLogo from "/vite.svg";
import ConditionalPractice from "./components/ConditionalPractice";
import "./App.css";
import TernaryConditional from "./components/TernaryConditional";
import LifeCycleComponent from "./components/LifeCycleComponent";
import FetchingWithUseEffect from "./components/FetchingWithUseEffect";
import ChildComponent from "./components/passingData/parentToChild/ChildComponent";
import ChildToParent from "./components/passingData/childToParent/ChildToParent";
import ChildToChildDisplay from "./components/passingData/childToChild/1/ChildToChildDisplay";
import ChildToChildDice from "./components/passingData/childToChild/1/ChildToChildDice";
import ChildToChildCounter from "./components/passingData/childToChild/usingContex/ChildToChildCounter";

const employees = ["Antony"];
// const CountContext = React.createContext();

function App() {
  //child to parent first example

  /*state to store the value of the dice for ChildToChild data exchange*/
  const [number, setNumber] = useState(0);

  /*function to be called from the child component, getting the argument value from child*/
  const callThisFromChildComponent = (data) => {
    console.log("Value from child component", data);
  };

  // const [count, setCount] = useState(0);
  // const onIncrement = () => {
  //   setCount(count + 1);
  // };
  // const onDecrement = () => {
  //   setCount(count - 1);
  // };

  // const [showCounter, setShowCounter] = useState(false);
  return (
    <div>
      {/* // <div className="card">
    //   <h1>Small Counter app</h1>
    //   <div>
    //     <button onClick={() => setShowCounter(!showCounter)}>
    //       {showCounter ? "Hide Counter" : "Show Counter"}
    //     </button>
    //     {showCounter ? <LifeCycleComponent /> : <></>}
    //   </div>
    // </div> */}
      {/* <FetchingWithUseEffect /> */}
      <ChildComponent name="Jose" lastName="Rosario" />
      <ChildToParent callback={callThisFromChildComponent} />
      {/*pass the function to the child component*/}
      {/*CTCDisplay shows dice value, CTCDice has a function picks a random number and then we set it as setNumber */}
      <ChildToChildDisplay number={number} />
      {/*display the value of number*/}
      <ChildToChildDice callback={setNumber} />
      {/*pass the function to set the value of number*/}

      {/* <CountContext.Provider value={{ count, onIncrement, onDecrement }}>
        <ChildToChildCounter />
      </CountContext.Provider> */}
    </div>
  );
}

export default App;
