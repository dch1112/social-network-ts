import {DialogsPageType} from "../types/entities"
import {v1} from "uuid"

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT'

const initialState: DialogsPageType = {
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

export type ActionTypes =
  ReturnType<typeof updateNewMessageCreator>
  | ReturnType<typeof addNewMessageCreator>


export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_TEXT": {
      return {
        ...state,
        dialogs: state.dialogs.map((d) => (
          d.id === action.dialogId
            ? {...d, newMessageText: action.text}
            : d
        ))
      }
    }
    case 'ADD_NEW_MESSAGE_TEXT': {
      let addMessageDialog = state.dialogs.find(dialog => dialog.id === action.dialogId)
      if (addMessageDialog && addMessageDialog.newMessageText.trim()) {
        return {
          ...state,
          messages: {...state.messages,
            [action.dialogId]: [...state.messages[action.dialogId], {
              id: v1(),
              message: addMessageDialog.newMessageText.trim(),
              isMine: true
            }]
          },
          dialogs: state.dialogs.map((d) => (
            d.id === action.dialogId
              ? {...d, newMessageText: ''}
              : d
          ))
        }
      }
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