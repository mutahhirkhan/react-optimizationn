import { LIGHT_THEME, DARK_THEME, CUSTOM_THEME } from "./ThemeConstants";

var themeReducer = (state, actions) => {
  var { type, payload } = actions;
  switch (type) {
    case LIGHT_THEME:
      return { background: "#ecedeb", color: "black" };
    case DARK_THEME:
      return { background: "#404040", color: "whitesmoke" };
    case CUSTOM_THEME:
      return {background: payload.theme.background, color: payload.theme.color};
    default:
      return state;
  }
};

export default themeReducer;