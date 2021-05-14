export default function languagePickerReducer(
  state = { language: "en" },
  action
) {
  switch (action.type) {
    case "SET_LANGUAGE":
      localStorage.setItem("language", action.language);
      let newState = { ...state, language: action.language };
      return newState;
    default:
      localStorage.setItem("language", state.language);
      return state;
  }
}
