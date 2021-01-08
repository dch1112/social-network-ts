import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../types/entities";

type PropsType = {
  profilePage: ProfilePageType
}

const Profile = (props: PropsType) => {
  return (
    <div className='profile'>
      <ProfileInfo/>
      <MyPosts
        profilePage={props.profilePage}
      />
    </div>
  );
};

export default Profile;

