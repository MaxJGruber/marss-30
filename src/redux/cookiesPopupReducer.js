export default function cookiesPopupReducer(
  state = { popupOpen: false },
  action
) {
  switch (action.type) {
    case "SET_POPUP":
      let newState = { ...state, popupOpen: action.popupOpen };
      return newState;
    default:
      return state;
  }
}
