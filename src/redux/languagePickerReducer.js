// let { language } = localStorage;
let language;
if (!language) {
  language = "en";
}
export default function languagePickerReducer(state = { language }, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      localStorage.setItem("language", action.language);
      console.log(localStorage);
      let newState = { ...state, language: action.language };
      return newState;
    default:
      // localStorage.setItem("language", state.language);
      return state;
  }
}
