import {ActionTypes} from "../redux/store";

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
