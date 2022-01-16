import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/store";
import {ActionsTypes, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";


export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBode: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElement = props.messages.map(m => <Message message={m.message}/>);
    const newMessageBody = props.newMessageBode;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

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
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}