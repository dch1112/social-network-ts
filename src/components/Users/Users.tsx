import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {followUser, unfollowUser} from "../../redux/usersPageReducer"
import {UsersPageType} from "../../types/entities"
import {AppRootStateType} from "../../redux/redux-store"
import User from "../User/User";

const Users = () => {
  const usersPage = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)
  const dispatch = useDispatch()

  return (<div>
      {usersPage.items.map(user => {
        const followUserHandler = () => {
          dispatch(followUser(user.id))
        }
        const unfollowUserHandler = () => {
          dispatch(unfollowUser(user.id))
        }
        return <User
          user={user}
          followUserHandler={followUserHandler}
          unfollowUserHandler={unfollowUserHandler}
        />
      })}
    </div>
  )
}

export default Users