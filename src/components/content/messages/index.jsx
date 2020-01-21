import React from 'react';
import style from './index.module.scss';
import DialogUser from "./dialogUser";
import Message from "./message";

const Messages = () => {
    let dialogUsers = [
        {
            id: 1,
            name: 'Andrew'
        },
        {
            id: 2,
            name: 'Igor'
        },
        {
            id: 3,
            name: 'Vlad'
        },
    ],
        messagesArr = [
            {
                id: 1,
                message: 'Hello'
            },
            {
                id: 2,
                message: 'Hello'
            },
            {
                id: 3,
                message: 'Hello'
            },
        ];
    return (
        <div className={style.messages}>
            <h2 className={style.messages__title}>Dialogs</h2>
            <div className={style.messages__wrap}>
                <div className={style.messages__users}>
                    <DialogUser name='Andrew' id='1'/>
                    <DialogUser name='Igor' id='2'/>
                    <DialogUser name='Vlad' id='3'/>
                    <DialogUser name='Sergey' id='4'/>
                </div>
                <div className={style.messages__chat}>
                    <Message message="Message"/>
                    <Message message="Message"/>
                    <Message message="Message3"/>
                    <Message message="Message"/>
                </div>
            </div>
        </div>
    )
}
export default Messages