import quoteReducer from "./quoteReducer";
import themeReducer from "./themeReducer";

export default function mainReducer(state = {}, action) {
  return {
    quotes: quoteReducer(state.quotes, action),
    theme: themeReducer(state.theme, action),
  };
}
