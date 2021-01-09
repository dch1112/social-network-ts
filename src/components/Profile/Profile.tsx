import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../types/entities";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

const Profile = () => {
  const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
  return (
    <div className='profile'>
      <ProfileInfo/>
      <MyPosts
        profilePage={profilePage}
      />
    </div>
  );
};

export default Profile;

