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

export type UserType = {
  "name": string
  "id": number
  "photos": {
    "small": string | null
    "large": string | null
  }
  "status": string | null
  "followed": boolean
}

export type UsersPageType = {
  "items": Array<UserType>
  "defaultPhoto": {
    "small": string
    "large": string
  }
  "totalCount": number
  "error": string | null
  "currentPage": number
  "pageSize": number
  "isLoading": boolean
}