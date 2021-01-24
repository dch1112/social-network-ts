import {UsersPageType} from "../types/entities";

enum ACTION_TYPES {
  FOLLOW = 'users/FOLLOW',
  UNFOLLOW = 'users/UNFOLLOW',
  SET_USERS = 'users/SET_USERS',
  SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
}

const initialState: UsersPageType =
  {
    "items": [
      {
        "name": "Shubert",
        "id": 1,
        "photos": {
          "small": 'https://papers.ch/wp-content/uploads/nik-avatar-square.png',
          "large": null
        },
        "status": null,
        "followed": false
      },
      {
        "name": "Hacker",
        "id": 2,
        "photos": {
          "small": null,
          "large": null
        },
        "status": null,
        "followed": true
      }
    ],
    "totalCount": 30,
    "error": null,
    "currentPage": 1,
    "pageSize": 10
  }

export type ActionTypes =
  ReturnType<typeof followUser>
  | ReturnType<typeof unfollowUser>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>

export const usersPageReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ACTION_TYPES.FOLLOW: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.userId ? {...item, followed: true} : item)
      }
    }
    case ACTION_TYPES.UNFOLLOW: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.userId ? {...item, followed: false} : item)
      }
    }
    case ACTION_TYPES.SET_USERS: {
      return {
        ...state,
        ...action.payload.users
      }
    }
    case ACTION_TYPES.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
    }
    default:
      return state
  }
}

export const followUser = (userId: number) => ({
  type: ACTION_TYPES.FOLLOW,
  payload: {userId}
} as const)

export const unfollowUser = (userId: number) => ({
  type: ACTION_TYPES.UNFOLLOW,
  payload: {userId}
} as const)

export const setUsers = (users: UsersPageType) => ({
  type: ACTION_TYPES.SET_USERS,
  payload: {users}
} as const)

export const setCurrentPage = (currentPage: number) => ({
  type: ACTION_TYPES.SET_CURRENT_PAGE,
  payload: {currentPage}
} as const)