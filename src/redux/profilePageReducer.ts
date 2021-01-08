import {ProfilePageType} from "../types/entities"
import {v1} from "uuid"

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT'

const initialState: ProfilePageType = {
  posts: [
    {id: v1(), message: 'Hi, it\'s my first post', likesCount: 38},
    {id: v1(), message: 'How are you?', likesCount: 17},
    {id: v1(), message: 'Yes', likesCount: 11},
    {id: v1(), message: 'Dada', likesCount: 15}
  ],
  newPostText: ''
}

type ActionTypes =
  ReturnType<typeof updateNewPostCreator>
  | ReturnType<typeof addNewPostCreator>

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }
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

export const updateNewPostCreator = (text: string) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text
} as const)

export const addNewPostCreator = () => ({
  type: ADD_NEW_POST_TEXT
} as const)
