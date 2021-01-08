import React, {ChangeEvent, FunctionComponent, KeyboardEvent} from 'react';
import s from "../Dialog/Dialog.module.css";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/dialogsPageReducer";
import {DialogType, MessageType} from "../../types/entities";
import {useDispatch} from "react-redux";

interface OwnProps {
  dialog: Array<MessageType>
  dialogName: DialogType
  }

type Props = OwnProps;

const Dialog: FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch()

  const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateNewMessageCreator(e.currentTarget.value, props.dialogName.id))
  }

  const onAddMessageHandler = () => {
    dispatch(addNewMessageCreator(props.dialogName.id))
  }

  const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addNewMessageCreator(props.dialogName.id))
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
