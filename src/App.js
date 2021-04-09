import { useState, useCallback, useMemo, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import UseRef from "./UseRef";
import { ThemeContext } from './ThemeContext/ThemeContext';

var Fns = new Set();

function App() {
  var {themeState, themeActions} = useContext(ThemeContext); //ye as a connect function kaam krrha he 
  var [counter1, setCounter1] = useState(1);
  var [counter2, setCounter2] = useState(1);
  var [toggleHeader, setToggleHeader] = useState(false);
  console.log(themeActions)
  
  /* 
  both these functions re-allocated on the change of any of them,
  we have to memoize them using callback to only reinitialize the function
  which was used, not all, for this we use Set() to verify
  */
  //  W I T H O U T   C A L L B A C K 
  { 
    //initially -> count1(address: 101) |  onChange -> count1(102)
    /*
    var incOne = () => setCounter1(counter1 + 1);
    
    //initially -> count2(address: 201) |  onChange -> count2(202)
    var incTwo = () => setCounter2(counter2 + 1);
    */
  }
  // --------------------------------------------------------------------------
  // W I T H   C A L L B A C K
  { 
    //initially -> count1(address: 101) |  onChange -> count1(102)
    var incOne = useCallback(() => setCounter1(counter1 + 1), [counter1]); //useCallback(Fn, depArr[])
    
    //initially -> count2(address: 201) |  onChange -> count2(202)
    var incTwo = useCallback(() => setCounter2(counter2 + 1), [counter2 ]); //useCallback(Fn, depArr[])
  }
    Fns.add(incOne) 
    Fns.add(incTwo) 
    console.log(Fns)

    // U S E M E M O 
  {
    var heavyCalculation = useMemo(() => {
      console.log('computation...')
      return ((((counter1 * counter2)*1000000) + 234234) - 2342341) / counter2
    }, [counter2, counter1])
  }
  return (

    <div className="App">
      <header className="App-header" style={{background: themeState.background, color: themeState.color}}>
        {/* <button onClick={incOne} className="buttons"> 
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
        <h1>Heavy Calculation <br/> {heavyCalculation}</h1> */}
      <button onClick={themeActions.setLightTheme}>SET LIGHT THEME</button>
      <button onClick={themeActions.setDarkTheme}>SET DARK THEME</button>
      <button onClick={() => themeActions.setCustomTheme({ background: "#a3b0d1", color:"#e9ebf0" })}>SET CUSTOM THEME</button>
      {/* <UseRef/> */}
      </header>
    </div>
  );
}

export default App;
