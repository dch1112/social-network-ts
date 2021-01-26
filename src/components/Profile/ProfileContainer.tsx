import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../types/entities";
import {connect, ConnectedProps} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

// inform we match url /:id
interface IMatchParams {
  userId: string;
}

class ProfileContainer extends React.Component<TProps & RouteComponentProps<IMatchParams>> {

  render() {
    return (
      <div className='profile'>
        <ProfileInfo
          userId={this.props.match.params.userId}
        />
        <MyPosts
          posts={this.props.posts}
          newPostText={this.props.newPostText}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: AppRootStateType): ProfilePageType => (state.profilePage)
const connector = connect(mapStateToProps,
  {})
type TProps = ConnectedProps<typeof connector>
export default withRouter(connector(ProfileContainer))