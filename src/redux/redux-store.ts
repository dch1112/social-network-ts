import {combineReducers, createStore} from "redux"
import {dialogsPageReducer} from "./dialogsPageReducer"
import {profilePageReducer} from "./profilePageReducer"
import {usersPageReducer} from "./usersPageReducer";

const rootReducer = combineReducers({
  dialogsPage: dialogsPageReducer,
  profilePage: profilePageReducer,
  usersPage: usersPageReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

let store = createStore(rootReducer)

export default store

// @ts-ignore
window.store = store