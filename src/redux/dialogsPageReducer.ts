import {ActionTypes, DialogsPageType} from "./store";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT'

export const updateNewMessageCreator = (text: string, dialogId: string) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
  dialogId: dialogId
} as const)

export const addNewMessageCreator = (dialogId: string) => ({
  type: ADD_NEW_MESSAGE_TEXT,
  dialogId: dialogId
} as const)


export const dialogsPageReducer = (state: DialogsPageType, action: ActionTypes) => {
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

