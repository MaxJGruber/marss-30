let cookiesAuth;

function hascookiesAuthSessionStorage(cookiesAuthState) {
  if (cookiesAuthState === undefined) {
    try {
      if (sessionStorage.getItem("cookiesAuth")) {
        cookiesAuth = sessionStorage.getItem("cookiesAuth");
        return cookiesAuth;
      } else {
        cookiesAuth = false;
        return cookiesAuth;
      }
    } catch (error) {
      cookiesAuth = false;
      return cookiesAuth;
    }
  } else {
    try {
      cookiesAuth = sessionStorage.setItem("cookiesAuth", cookiesAuthState);
      return cookiesAuth;
    } catch (error) {
      cookiesAuth = cookiesAuthState;
      return cookiesAuth;
    }
  }
}

export default function cookiesAuthReducer(
  state = { cookiesAuth: hascookiesAuthSessionStorage() },
  action
) {
  switch (action.type) {
    case "SET_COOKIESAUTH":
      hascookiesAuthSessionStorage(action.cookiesAuth);
      let newState = { ...state, cookiesAuth: action.cookiesAuth };
      return newState;
    default:
      return state;
  }
}
