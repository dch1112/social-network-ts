import React from 'react';
import Dialog from "../Dialog/Dialog";
import {NavLink, useParams} from "react-router-dom";
import s from './Dialogs.module.css'
import {DialogsPageType} from "../../types/entities";
import {connect, useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../../redux/redux-store";

interface OwnProps {
  dialogsPage: DialogsPageType
  dispatch: AppDispatch
}

type Props = OwnProps;

const Dialogs = (props: Props) => {
  const params = useParams<{ dialogId: string }>()
  const dialogsPage = useSelector<AppRootStateType, DialogsPageType>(state => state.dialogsPage)
  const activeDialog = dialogsPage.messages[params.dialogId]
  const name = dialogsPage.dialogs.find(dialog => dialog.id === params.dialogId)
  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogNames}>
        {dialogsPage.dialogs.map((dialog) => (
          <div key={dialog.id}>
            <NavLink to={'/dialogs/' + dialog.id} activeClassName={s.dialogNameActive} className={s.dialogName}>
              {dialog.name}
            </NavLink>
          </div>
        ))}
      </div>
      {activeDialog && name
      && <Dialog
        dialogName={name}
        dialog={activeDialog}
        dispatch={props.dispatch}
      />}
    </div>
  );
}

const mapStateToProps = (state: AppRootStateType) => ({dialogsPage: state.dialogsPage})
const mapDispatchToProps = (dispatch: AppDispatch) => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)