import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemPropsType} from "../../index";
import {AppPropsType} from "../../App";


type DialogsType = {
    dialogs: DialogItemPropsType[]
    messages: MessageS[]
}

export type MessageS = {
    id: number
    message: string
}


export const Dialogs = (props: DialogsType) => {


    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElement =props.state.messages.map(m => <Message message={m.message}/>)

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