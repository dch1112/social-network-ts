import React, {ChangeEvent, FunctionComponent, KeyboardEvent} from 'react';
import s from "../Dialog/Dialog.module.css";
import {ActionTypes, DialogType, MessageType} from "../../redux/store";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";

interface OwnProps {
  dialog: Array<MessageType>
  dialogName: DialogType
  dispatch: (action: ActionTypes) => void
  }

type Props = OwnProps;

const Dialog: FunctionComponent<Props> = (props) => {
  const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(updateNewMessageCreator(e.currentTarget.value, props.dialogName.id))
  }

  const onAddMessageHandler = () => {
    props.dispatch(addNewMessageCreator(props.dialogName.id))
  }

  const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.dispatch(addNewMessageCreator(props.dialogName.id))
    }
  }

  return (
    <div>
      <div className={s.dialogMessages}>
        <div className={s.companionName}>
          Chat with {props.dialogName.name}
        </div>
        <div className={s.messages}>
          {props.dialog.map((message) => (<div key={message.id}
                                           className={s.dialogMessage}>
            <div className={`${s.messageContainer} ${message.isMine ? s.mineMessage : s.notMineMessage}`}>
              <div className={`${s.messageContent} ${message.isMine ? s.mineMessage : s.notMineMessage}`}>
                <div className={s.messageText}>
                  {message.message}
                </div>
              </div>
            </div>
          </div>))}
        </div>
        <div className={s.newMessage}>
          <input
            className={s.newMessageInput + ' ' + s.newMessage}
            value={props.dialogName.newMessageText}
            onChange={onChangeMessageHandler}
            onKeyPress={onKeyPressHandler}
            autoFocus
          />
          <button
            onClick={onAddMessageHandler}
            className={s.newMessageButton + ' ' + s.newMessage}>Send
          </button>
        </div>
      </div>
    </div>);
};

export default Dialog;
