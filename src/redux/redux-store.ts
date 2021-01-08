import {combineReducers, createStore} from "redux"
import {dialogsPageReducer} from "./dialogsPageReducer"
import {profilePageReducer} from "./profilePageReducer"

const rootReducer = combineReducers({
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store

// @ts-ignore
window.store = store