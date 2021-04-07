import { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

var Fns = new Set();

function App() {
  var [counter1, setCounter1] = useState(1);
  var [counter2, setCounter2] = useState(1);
  var [toggleHeader, setToggleHeader] = useState(false);
  
  var incOne = () => setCounter1(counter1 + 1);
  var incTwo = () => setCounter2(counter2 + 1);
  Fns.add(incOne) 
  Fns.add(incTwo) 
  console.log(Fns)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={incOne} className="buttons">
          + counter1
        </button>
        <h1>{counter1}</h1>
        <button onClick={incTwo} className="buttons">
          + counter2
        </button>
        <h1>{counter2}</h1>

        <button
          onClick={() => setToggleHeader(!toggleHeader)}
          className="buttons"
        >
          Toggle Header
        </button>
        {toggleHeader && <Header content="I'm Header" />}
      </header>
    </div>
  );
}

export default App;
