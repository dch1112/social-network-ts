import {v1} from "uuid";
import {addNewMessageCreator, dialogsPageReducer, updateNewMessageCreator} from "./dialogsPageReducer";
import {addNewPostCreator, profilePageReducer, updateNewPostCreator} from "./profilePageReducer";

export type ActionTypes = ReturnType<typeof updateNewPostCreator>
  | ReturnType<typeof addNewPostCreator>
  | ReturnType<typeof updateNewMessageCreator>
  | ReturnType<typeof addNewMessageCreator>

export type PostType = {
  id: string,
  message: string,
  likesCount: number
}

export type DialogType = {
  id: string,
  name: string,
  newMessageText: string
}

export type MessageType = {
  id: string,
  message: string,
  isMine: boolean
}

export type MessagesType = {
  [key: string]: Array<MessageType>
}

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: MessagesType
}

export type ProfilePageType = {
  posts: Array<PostType>,
  newPostText: string | undefined
}

export type StateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType
}

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  subscribe: (observer: any) => void
  dispatch: (action: ActionTypes) => void
}

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: v1(), message: 'Hi, it\'s my first post', likesCount: 38},
        {id: v1(), message: 'How are you?', likesCount: 17},
        {id: v1(), message: 'Yes', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 15}
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        {
          id: '1', name: 'Dimych', newMessageText: ''
        },
        {
          id: '2', name: 'Max', newMessageText: ''
        },
        {
          id: '3', name: 'Sveta', newMessageText: ''
        },
      ],
      messages: {
        '1': [
          {id: v1(), message: 'Hi', isMine: true},
          {id: v1(), message: 'Hey hey', isMine: false},
          {id: v1(), message: 'Hey hey', isMine: false},
          {id: v1(), message: 'Hey hey', isMine: false},
          {id: v1(), message: 'How is your', isMine: true},
          {id: v1(), message: 'Yo', isMine: false},
          {id: v1(), message: 'Yo yo yo', isMine: false}
        ],
        '2': [
          {id: v1(), message: 'Yo', isMine: true},
          {id: v1(), message: 'Whats up', isMine: false}
        ],
        '3': [
          {id: v1(), message: 'Hello', isMine: false}
        ]
      }
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    // debugger
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._callSubscriber()
  }
}

export default store;