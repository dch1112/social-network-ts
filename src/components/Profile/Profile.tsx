import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../types/entities";
import {useDispatch} from "react-redux";

type PropsType = {
  profilePage: ProfilePageType
}

const Profile = (props: PropsType) => {
  const dispatch = useDispatch()
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

