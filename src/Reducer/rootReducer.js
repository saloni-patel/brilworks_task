import { combineReducers } from "redux";
import { todoReducer } from "./mainReducer";


const rootReducer = combineReducers({
    todoReducer

})

export default rootReducer;