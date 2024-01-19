import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ConditionalPractice from "./components/ConditionalPractice";
import "./App.css";
import TernaryConditional from "./components/TernaryConditional";
import LifeCycleComponent from "./components/LifeCycleComponent";

const employees = ["Antony"];

function App() {
  return (
    <>
      {/* <TernaryConditional employees={employees} /> */}
      <LifeCycleComponent />

      <div className="card"></div>
    </>
  );
}

export default App;
