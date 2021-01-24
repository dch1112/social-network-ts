import React from 'react'
import {UserType} from "../../types/entities"
import User from "./User/User";

interface OwnProps {
  items: Array<UserType>
  followUserHandler: (id: number) => void
  unfollowUserHandler: (id: number) => void
}

type Props = OwnProps;

const Users: React.FC<Props> = (props) => {
  return <div>
    {
      props.items.map(user => {
        return <User
          key={user.id}
          user={user}
          followUserHandler={props.followUserHandler}
          unfollowUserHandler={props.unfollowUserHandler}
        />
      })
    }
  </div>
}

export default Users
