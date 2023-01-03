import { combineReducers } from "redux";
import auth from "./auth";

// reducer를 합쳐준다.
const reducer = combineReducers({
  auth,
});

export default reducer;
