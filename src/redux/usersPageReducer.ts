import {UsersPageType} from "../types/entities";
import defaultAvatar from './../defaultAvatar.png'
import {Dispatch} from "redux";
import axios from "axios";
import {usersAPI} from "../api/api";

enum ACTION_TYPES {
  FOLLOW = 'users/FOLLOW',
  UNFOLLOW = 'users/UNFOLLOW',
  SET_USERS = 'users/SET_USERS',
  SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
  SET_IS_LOADING = 'users/SET_IS_LOADING',
}

const initialState: UsersPageType =
  {
    "items": [],
    "defaultPhoto": defaultAvatar,
    "totalCount": 0,
    "error": null,
    "currentPage": 1,
    "pageSize": 10,
    "isLoading": true,
  }

export type ActionTypes =
  ReturnType<typeof followUser>
  | ReturnType<typeof unfollowUser>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setIsLoading>

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
        ...action.payload
      }
    }
    case ACTION_TYPES.SET_CURRENT_PAGE: {
      return {
        ...state,
        ...action.payload
      }
    }
    case ACTION_TYPES.SET_IS_LOADING: {
      return {
        ...state,
        ...action.payload
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

export const setIsLoading = (isLoading: boolean) => ({
  type: ACTION_TYPES.SET_IS_LOADING,
  payload: {isLoading}
} as const)

export const requestUsers = (page: number, count: number) => (dispatch: Dispatch<any>) => {
  dispatch(setIsLoading(true))
  usersAPI.getUsers(page, count)
    .then((data) => dispatch(setUsers(data)))
    .then(() => setTimeout(() => dispatch(setIsLoading(false)), 2000))
}