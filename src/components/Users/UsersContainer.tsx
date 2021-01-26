import React from 'react'
import {connect, ConnectedProps} from "react-redux"
import {followUser, getUsers, setCurrentPage, setIsLoading, unfollowUser} from "../../redux/usersPageReducer"
import {UsersPageType} from "../../types/entities"
import {AppRootStateType} from "../../redux/redux-store"
import Users from "./Users";
import ReactPaginate from "react-paginate";
import s from './UsersContainer.module.css'
import UserLoading from "./UserLoading/UserLoading";

class UsersContainer extends React.Component<TProps> {
  componentDidMount() {
    this.props.getUsers(1, this.props.pageSize)
  }

  setCurrentPageHandler = (currentPage: number) => {
    this.props.setCurrentPage(currentPage)
    this.props.getUsers(currentPage, this.props.pageSize)
  }

  render() {
    return <>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={s.break}
        pageCount={Math.ceil(this.props.totalCount / this.props.pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({selected}) => this.setCurrentPageHandler(selected + 1)}
        containerClassName={s.pagination}
        activeClassName={s.active}
        pageLinkClassName={s.pages}
      />
      {this.props.isLoading
        ? <>
          <UserLoading/>
          <UserLoading/>
          <UserLoading/>
          <UserLoading/>
          <UserLoading/>
        </>
        : <Users
          items={this.props.items}
          defaultAvatar={this.props.defaultPhoto}
          isLoading={this.props.isLoading}
          followUserHandler={this.props.followUser}
          unfollowUserHandler={this.props.unfollowUser}
        />
      }
    </>
  }
}

const mapStateToProps = (state: AppRootStateType): UsersPageType => (state.usersPage)

const connector = connect(mapStateToProps,
  {
    getUsers,
    followUser,
    unfollowUser,
    setCurrentPage,
    setIsLoading
  })
type TProps = ConnectedProps<typeof connector>
export default connector(UsersContainer);
