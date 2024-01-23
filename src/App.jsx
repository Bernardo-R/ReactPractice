import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ConditionalPractice from "./components/ConditionalPractice";
import "./App.css";
import TernaryConditional from "./components/TernaryConditional";
import LifeCycleComponent from "./components/LifeCycleComponent";
import FetchingWithUseEffect from "./components/FetchingWithUseEffect";

const employees = ["Antony"];

function App() {
  // const [showCounter, setShowCounter] = useState(false);
  return (
    // <div className="card">
    //   <h1>Small Counter app</h1>
    //   <div>
    //     <button onClick={() => setShowCounter(!showCounter)}>
    //       {showCounter ? "Hide Counter" : "Show Counter"}
    //     </button>
    //     {showCounter ? <LifeCycleComponent /> : <></>}
    //   </div>
    // </div>
    <FetchingWithUseEffect />
  );
}

export default App;
