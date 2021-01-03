import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";

const rootReducer = combineReducers({dialogsPageReducer, profilePageReducer})
export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(combineReducers)

export default store;