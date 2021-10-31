import { combineReducers } from "redux";

import languagePickerReducer from "./languagePickerReducer";
import cookiesAuthReducer from "./cookiesAuthReducer";
import cookiesPopupReducer from "./cookiesPopupReducer";

const rootReducer = combineReducers({
  language: languagePickerReducer,
  cookiesAuth: cookiesAuthReducer,
  cookiesWindow: cookiesPopupReducer,
});

export default rootReducer;
