import React, { createContext, useReducer } from "react";
import themeReducer from "./ThemeReducer";
import { LIGHT_THEME, DARK_THEME, CUSTOM_THEME } from "./ThemeConstants";

export var ThemeContext = createContext(); //ye themeContext chezen provide karega, idhar se hoti vi aengi 

var initialState = { background: "#ecedeb", color: "black" };

const ThemeProvider = ({ Children }) => {
  var [themeState, dispatch] = useReducer(themeReducer, initialState);
  var actions = {
    setLightTheme: () => dispatch({ type: LIGHT_THEME }),
    setDarkTheme: () => dispatch({ type: DARK_THEME }),
    setCustomTheme: (theme) =>
      dispatch({ type: CUSTOM_THEME, payload: { theme } }),
  };
  return (
    //   ye as a provider kaam krrha he 
    <ThemeContext.Provider value={{ themeState, themeActions: actions }}>
      {Children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
