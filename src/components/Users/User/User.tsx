import React, {FunctionComponent} from 'react'
import s from "./User.module.css";
import {UserType} from "../../../types/entities";

interface OwnProps {
  user: UserType
  defaultAvatar: string
  followUserHandler: (id: number) => void
  unfollowUserHandler: (id: number) => void
}

type Props = OwnProps

const User: FunctionComponent<Props> = (props) => {
  const {
    user,
    followUserHandler,
    unfollowUserHandler
  } = props

  return <div key={user.id}>
    <div className={s.avatar}>
      <img
        src={user.photos.small
          ? user.photos.small
          : props.defaultAvatar}
        alt=""
      />
    </div>
    <div>{user.name}</div>
    <div>{user.followed
      ? <button onClick={() => unfollowUserHandler(user.id)}>Unfollow</button>
      : <button onClick={() => followUserHandler(user.id)}>Follow</button>
    }</div>
  </div>
}

export default User
