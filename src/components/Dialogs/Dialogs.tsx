import React from 'react';
import {ActionTypes, DialogsPageType} from "../../redux/store";
import Dialog from "../Dialog/Dialog";
import {NavLink, useParams} from "react-router-dom";
import s from './Dialogs.module.css'

type propsType = {
  dialogsPage: DialogsPageType
  dispatch: (action: ActionTypes) => void
}

const Dialogs = (props: propsType) => {
  const params = useParams<{ dialogId: string }>()
  const activeDialog = props.dialogsPage.messages[params.dialogId]              //.find((dialog) => dialog.id === params.dialogId)
  // debugger
  const name = props.dialogsPage.dialogs.find(dialog => dialog.id === params.dialogId)
  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogNames}>
        {props.dialogsPage.dialogs.map((dialog) => (
          <div key={dialog.id}>
            <NavLink to={'/dialogs/' + dialog.id} activeClassName={s.dialogNameActive} className={s.dialogName}>
              {dialog.name}
            </NavLink>

          </div>
        ))}
      </div>
      {activeDialog && name && <Dialog dialogName={name}
                                       dialog={activeDialog}
                                       dispatch={props.dispatch}/>}

    </div>
  );
}
export default Dialogs;