import {v1} from "uuid";
import {addNewPostCreator, profilePageReducer, updateNewPostCreator} from "./profilePageReducer";
import {ProfilePageType} from "../types/entities";

let initialState: ProfilePageType

beforeEach(() => {
  initialState = {
    posts: [
      {id: v1(), message: 'Hi, it\'s my first post', likesCount: 38},
      {id: v1(), message: 'How are you?', likesCount: 17},
      {id: v1(), message: 'Yes', likesCount: 11},
      {id: v1(), message: 'Dada', likesCount: 15}
    ],
    newPostText: ''
  }
})

test('update new post text', () => {

  const newState = profilePageReducer(initialState, updateNewPostCreator('hello'))

  expect(newState.newPostText).toBe('hello')
  expect(newState.posts.length).toBe(4)
})

test('add new post', () => {

  const newStateUpdateMessage = profilePageReducer(initialState, updateNewPostCreator('hello'))
  const newStateAddMessage = profilePageReducer(newStateUpdateMessage, addNewPostCreator())

  expect(newStateAddMessage.newPostText).toBe('')
  expect(newStateAddMessage.posts.length).toBe(5)
  expect(newStateAddMessage.posts[4].id).toBeDefined()
  expect(newStateAddMessage.posts[4].message).toBe('hello')
  expect(newStateAddMessage.posts[4].likesCount).toBe(0)
})