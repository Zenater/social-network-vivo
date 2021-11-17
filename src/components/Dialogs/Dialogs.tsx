import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message =
    (props: MessageType) => {
        return (
            <div className={s.dialog}>{props.message}</div>
        )
    }

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Valera" id='1'/>
                <DialogItem name="Sveta" id='2'/>
                <DialogItem name="Jon" id='3'/>
                <DialogItem name="Victor" id='4'/>
                <DialogItem name="Oleg" id='5'/>
                <DialogItem name="Igor" id='6'/>
            </div>
            <div className={s.messages}>
                <Message message="Yo"/>
                <Message message="Hi"/>
                <Message message="i tried"/>
            </div>
        </div>
    )
}