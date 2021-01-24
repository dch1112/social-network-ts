import React, {FunctionComponent} from 'react'
import s from "./User.module.css";
import {UserType} from "../../types/entities";

interface OwnProps {
  user: UserType
  followUserHandler: () => void
  unfollowUserHandler: () => void
}

type Props = OwnProps

const User: FunctionComponent<Props> = (props) => {
  const {
    user,
    followUserHandler,
    unfollowUserHandler
  } = props

  return <div key={user.id}>
    <div className={s.avatar}>{user.photos.small
      ? <img src={user.photos.small} alt=""/>
      : <img src="https://papers.ch/wp-content/uploads/pascal-avatar-square.png" alt=""/>
    }</div>
    <div>{user.name}</div>
    <div>{user.followed
      ? <button onClick={unfollowUserHandler}>Unfollow</button>
      : <button onClick={followUserHandler}>Follow</button>
    }</div>
  </div>
}

export default User
