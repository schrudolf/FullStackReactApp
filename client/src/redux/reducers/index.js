import { combineReducers } from "redux";

import sessionReducer from "./sessionReducer";


const reducers = combineReducers({
    isLogged: sessionReducer
});

export default reducers;