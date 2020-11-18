import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {

}


const Profile = (props: PropsType) => {

  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;

