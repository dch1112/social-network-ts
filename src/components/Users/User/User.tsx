import React, {FunctionComponent} from 'react'
import s from "./User.module.css";
import {UserType} from "../../../types/entities";

interface OwnProps {
  user: UserType
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
  const DEFAULT_IMAGE = "https://papers.ch/wp-content/uploads/pascal-avatar-square.png"

  return <div key={user.id}>
    <div className={s.avatar}>
      <img
        src={user.photos.small
          ? user.photos.small
          : DEFAULT_IMAGE}
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
