import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/dialogsReducer";
import {Navigate} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../../common/FormsControl/Textarea";


export type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    sendMessage: (newMessage: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageElement = props.messages.map(m => <Message message={m.message}/>);

    const addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}
const maxLenght10 = maxLengthCreator(50);

const AddMessageForm = (props: any)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter you message'} component={Textarea} name={'newMessageBody'}
                   validate={[required,maxLenght10]}
            />
            <div>
                <button>send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
