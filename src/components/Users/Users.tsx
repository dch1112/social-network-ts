import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {followUser, unfollowUser} from "../../redux/usersPageReducer"
import {UsersPageType} from "../../types/entities"
import {AppRootStateType} from "../../redux/redux-store"
import s from './Users.module.css'

const Users = () => {
  const dialogsPage = useSelector<AppRootStateType, UsersPageType>(state => state.usersPage)
  const dispatch = useDispatch()

  return (<div>
      {dialogsPage.items.map(item => {
        const followUserHandler = () => {
          dispatch(followUser(item.id))
        }
        const unfollowUserHandler = () => {
          dispatch(unfollowUser(item.id))
        }
        return <div key={item.id}>
          <div className={s.avatar}>{item.photos.small
            ? <img src={item.photos.small} alt=""/>
            : <img src="https://papers.ch/wp-content/uploads/pascal-avatar-square.png" alt=""/>
          }</div>
          <div>{item.name}</div>
          <div>{item.followed
            ? <button onClick={unfollowUserHandler}>Unfollow</button>
            : <button onClick={followUserHandler}>Follow</button>
          }</div>
        </div>
      })}
    </div>
  )
}

export default Users