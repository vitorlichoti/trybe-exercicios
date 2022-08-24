import { combineReducers } from "redux";
import loginReducer from "./login";
import registersReducer from "./registercostumer";

export const rootReducer = combineReducers({ loginReducer, registersReducer});
