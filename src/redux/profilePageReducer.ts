import {ActionTypes, ProfilePageType} from "./store";
import {v1} from "uuid";
import {ChangeEvent} from "react";

// type dialogsPageReducerProps = {
//   state: DialogsPageType
//   action: any
// }

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT'

export const updateNewPostCreator = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text
} as const)

export const addNewPostCreator = () => ({
  type: ADD_NEW_POST_TEXT
} as const)

export const profilePageReducer = (state: ProfilePageType, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text
      return state
    case ADD_NEW_POST_TEXT:
      if (state.newPostText && state.newPostText.trim()) {
        return {
          ...state,
          posts: [...state.posts, {id: v1(), message: state.newPostText, likesCount: 0}],
          newPostText: ''
        }
      }
      return state
    default:
      return state
  }
}

