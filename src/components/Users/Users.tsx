import React from 'react'
import {UserType} from "../../types/entities"
import User from "./User/User";
import defaultAvatar from "../../Missing_avatar.svg";
import UserLoading from "./UserLoading/UserLoading";

interface OwnProps {
  items: Array<UserType>
  defaultAvatar: string
  isLoading: boolean
  followUserHandler: (id: number) => void
  unfollowUserHandler: (id: number) => void
}

type Props = OwnProps;

const Users: React.FC<Props> = (props) => {
  return <div>
    {
      props.items.map(user => {
        return <>
          <User
            key={user.id}
            user={user}
            defaultAvatar={props.defaultAvatar}
            followUserHandler={props.followUserHandler}
            unfollowUserHandler={props.unfollowUserHandler}
          />
        </>
      })
    }
  </div>
}

export default Users
