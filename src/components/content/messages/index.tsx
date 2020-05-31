import React from 'react';
import style from './index.module.scss';
import DialogUser from "./dialogUser";
import Message from "./message";
import MessageForm from "./messageForm/form";
import {Redirect, RouteComponentProps} from "react-router-dom";
import {DialogType, MessagesType} from "../../../types/types";
import { Dispatch } from 'redux';

type PropsType = {
    isAuth: boolean
    addMessage: () => void,
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}

const Messages:React.FC<PropsType & RouteComponentProps & Dispatch> = (props) => {
    let dialogsElements = props.dialogs.map(el => <DialogUser name={el.name} id={el.id} key={el.id}/>),
        messagesElements = props.messages.map(el => <Message message={el.message} id={el.id} key={el.id}/>);
    if(!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={style.messages}>
            <h2 className={style.messages__title}>Dialogs</h2>
            <div className={style.messages__wrap}>
                <div className={style.messages__users}>
                    {dialogsElements}
                </div>
                <div className={style.messages__chat}>
                    {messagesElements}
                    <MessageForm onSubmit={props.addMessage}/>
                </div>
            </div>
        </div>
    )
}
export default Messages