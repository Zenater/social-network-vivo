import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/dialogsReducer";
import {Navigate}  from 'react-router-dom';

export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageText: (newMessage: string) =>void
    addMessage: () =>void
    newMessageBody: string
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElement = props.messages.map(m => <Message message={m.message}/>);
    const newMessageBody = props.newMessageBody;

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.newMessageText(e.currentTarget.value)
    }
    const onAddMessage=()=>{
        props.addMessage()
    }

    if(!props.isAuth) return <Navigate to="/login"/>


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter you message'}>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}