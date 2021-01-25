import React from 'react'
import {connect, ConnectedProps} from "react-redux"
import {followUser, setCurrentPage, setUsers, unfollowUser} from "../../redux/usersPageReducer"
import {UsersPageType} from "../../types/entities"
import {AppDispatch, AppRootStateType} from "../../redux/redux-store"
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import Pages from "./Pages/Pages";
import ReactPaginate from "react-paginate";
import s from './UsersContainer.module.css'

class UsersContainer extends React.Component<TProps> {
  componentDidMount() {
    this.setCurrentPageHandler(1)
  }

  setCurrentPageHandler = (currentPage: number) => {
    this.props.setCurrentPage(currentPage)
    // @ts-ignore
    this.props.dispatch(this.props.getUsers(currentPage, this.props.pageSize))
  }

  render() {
    return <>
      <Users
        items={this.props.items}
        followUserHandler={this.props.followUserHandler}
        unfollowUserHandler={this.props.unfollowUserHandler}
      />

      <div>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={s.break}
          pageCount={Math.ceil(this.props.totalCount / this.props.pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({selected}) => this.setCurrentPageHandler(selected)}
          containerClassName={s.pagination}
          activeClassName={s.active}
          pageLinkClassName={s.pages}
        />
      </div>
    </>
  }
}

const mapStateToProps = (state: AppRootStateType): UsersPageType => (state.usersPage)
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
  getUsers: (page: number, count: number) => (dispatch: Dispatch<any>) => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
      .then((res) => dispatch(setUsers(res.data)))
  },
  followUserHandler: (id: number) => {
    dispatch(followUser(id))
  },
  unfollowUserHandler: (id: number) => {
    dispatch(unfollowUser(id))
  },
  setCurrentPage: (currentPage: number) => {
    dispatch(setCurrentPage(currentPage))
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type TProps = ConnectedProps<typeof connector>
export default connector(UsersContainer);
