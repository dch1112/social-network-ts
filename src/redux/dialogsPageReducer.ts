import {ActionTypes} from "./store";
import {v1} from "uuid";

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

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT'

let initialState: DialogsPageType = {
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

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_TEXT":
      let dialog = state.dialogs.find(dialog => dialog.id === action.dialogId)
      if (dialog) {
        dialog.newMessageText = action.text
      }
      return {...state}
    case 'ADD_NEW_MESSAGE_TEXT':
      let addMessageDialog = state.dialogs.find(dialog => dialog.id === action.dialogId)
      if (addMessageDialog && addMessageDialog.newMessageText.trim()) {
        let newMessage = {
          id: v1(), message: addMessageDialog.newMessageText.trim(), isMine: true
        }
        state.messages[addMessageDialog.id].push(newMessage)
        addMessageDialog.newMessageText = ''
        return {...state}
      }
      return state
    default:
      return state
  }
}

export const updateNewMessageCreator = (text: string, dialogId: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
  dialogId: dialogId
} as const)

export const addNewMessageCreator = (dialogId: string) => ({
  type: ADD_NEW_MESSAGE_TEXT,
  dialogId: dialogId
} as const)