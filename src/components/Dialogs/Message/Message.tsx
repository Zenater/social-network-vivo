import React from 'react';
import s from './../Dialogs.module.css';


type MessageType = {
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <li className={s.message__item}>

        <div className={s.text}>{props.message}</div>
        </li>
    )
}
