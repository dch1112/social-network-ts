import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import {addNewPostCreator, updateNewPostCreator} from "../../../redux/profilePageReducer";
import {ProfilePageType} from "../../../types/entities";
import {useDispatch} from "react-redux";

type PropsType = {
  profilePage: ProfilePageType
}

const MyPosts = (props: PropsType) => {
  const dispatch = useDispatch()
  const onChangePostHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateNewPostCreator(e.currentTarget.value))
  }

  const onAddPostHandler = () => {
    dispatch(addNewPostCreator())
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addNewPostCreator())
    }
  }

  let posts = props.profilePage.posts.map((post) => (
    <div className={s.postContainer}>
      <div className={s.postContent}>
        <div className={s.postMessage}>
          {post.message}
        </div>
        <div className={s.likes}>
          <img
            className={s.likeImg}
            src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-6.png"
            alt=""
          />
          {post.likesCount}
        </div>
      </div>
    </div>
  ))
  return (
    <div className={s.myPosts}>
      <div>My posts</div>
      <input
        className={s.newPostInput + ' ' + s.newPost}
        value={props.profilePage.newPostText}
        onChange={onChangePostHandler}
        onKeyPress={onKeyPressHandler}
        autoFocus/>
      <button
        onClick={onAddPostHandler}
        className={s.newPostButton + ' ' + s.newPost}>Add post
      </button>
      {posts}
    </div>
  );
};

export default MyPosts;