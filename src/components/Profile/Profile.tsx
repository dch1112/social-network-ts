import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionTypes, ProfilePageType} from "../../redux/store";

type PropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionTypes) => void
}

const Profile = (props: PropsType) => {

  return (
    <div className='profile'>
      <ProfileInfo/>
      <MyPosts profilePage={props.profilePage}
               dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;

