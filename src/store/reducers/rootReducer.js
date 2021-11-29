import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  post: postReducer,
	user: userReducer
});

export default rootReducer;
