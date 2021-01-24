import React from 'react'
import {connect, ConnectedProps} from "react-redux"
import {followUser, getUsers, unfollowUser} from "../../redux/usersPageReducer"
import {UsersPageType} from "../../types/entities"
import {AppDispatch, AppRootStateType} from "../../redux/redux-store"
import User from "../User/User";

class UsersContainer extends React.Component<TProps> {
  // getUsers = (page: number, count: number) => {
  //   axios
  //     .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
  //     .then((res) => this.props.dispatch(setUsers(res.data)))
  // }

  componentDidMount() {
    // @ts-ignore
    this.props.dispatch(this.props.getUsers(2, 100))
  }

  render() {
    return <div>
      {
        this.props.items.map(user => {

          const followUserHandler = () => {
            this.props.dispatch(followUser(user.id))
          }

          const unfollowUserHandler = () => {
            this.props.dispatch(unfollowUser(user.id))
          }

          return <User
            key={user.id}
            user={user}
            followUserHandler={followUserHandler}
            unfollowUserHandler={unfollowUserHandler}
          />
        })
      }
    </div>
  }
}

const mapStateToProps = (state: AppRootStateType): UsersPageType => (state.usersPage)
const mapDispatchToProps = (dispatch: AppDispatch) => ({dispatch, getUsers})

const connector = connect(mapStateToProps, mapDispatchToProps)
type TProps = ConnectedProps<typeof connector>
export default connector(UsersContainer);
