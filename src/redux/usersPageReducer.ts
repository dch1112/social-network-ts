import {UsersPageType} from "../types/entities";
import axios from "axios";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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
    "error": null
  }

export type ActionTypes =
  ReturnType<typeof followUser>
  | ReturnType<typeof unfollowUser>
  | ReturnType<typeof setUsers>

export const usersPageReducer = (state: UsersPageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.userId ? {...item, followed: true} : item)
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.userId ? {...item, followed: false} : item)
      }
    }
    case
    SET_USERS: {
      return {
        ...state,
        ...action.payload.users
      }
    }
    default:
      return state
  }
}

export const followUser = (userId: number) => ({
  type: FOLLOW,
  payload: {userId}
} as const)

export const unfollowUser = (userId: number) => ({
  type: UNFOLLOW,
  payload: {userId}
} as const)

export const setUsers = (users: UsersPageType) => ({
  type: SET_USERS,
  payload: {users}
} as const)


export const getUsers = (page: number, count: number) => (dispatch: Dispatch<any>) => {
  axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
    // .then(console.log)
    .then((res) => dispatch(setUsers(res.data)))
}