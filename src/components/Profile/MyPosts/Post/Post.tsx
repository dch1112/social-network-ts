import React from "react";
import styles from './Message.module.css';

type messageData = {
  avatar: string,
  name: string,
  message: string,
  time: string,
};

function Message(props: messageData) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt="Avatar"/>
      <div className={styles.content}>
        <div className={styles.content_text}>
          <div className={styles.name}>
            {props.name}
          </div>
          <div className={styles.message}>
            {props.message}
          </div>
        </div>
        <div className={styles.content_time}>
          <div className={styles.time}>
            {props.time}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Message;
