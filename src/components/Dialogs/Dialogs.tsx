import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    const dialogs = [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Igor'}
    ]
    const messages = [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'i tried'}
    ]

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElement = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}