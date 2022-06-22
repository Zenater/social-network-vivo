import React from 'react';
import dialogs from './Dialogs.module.css';
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

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>);
    const messageElement = props.messages.map(m => <Message message={m.message}/>);

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Navigate to="/login"/>
    return (
        <div className={dialogs.dialogs__wrapper}>
            <div className={dialogs.dialogs}>
                <ul className={dialogs.dialog__list}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={dialogs.messages}>
                <ul className={dialogs.message__list}>
                    <div>{messageElement}</div>
                </ul>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
)
}
const maxLenght10 = maxLengthCreator(50);

const DialogsFormData = (props: any) => {
    return (
        <form className={dialogs.box} onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter you message'} component={Textarea} name={'newMessageBody'}
                   validate={[required, maxLenght10]}  className={dialogs.textarea}
            />
            <div>
                <button className={dialogs.btn}>send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(DialogsFormData)

