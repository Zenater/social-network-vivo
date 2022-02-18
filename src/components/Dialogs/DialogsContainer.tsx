import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {DialogsType, MessageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

export type MapStateToPropsType = {
    dialogs: DialogsType[],
    messages: MessageType[],
    newMessageBody: string
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    newMessageText: (newMessage: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newMessageText: (newMessage: string) => {
            dispatch(updateNewMessageBodyAC(newMessage))
        },
        addMessage: () => dispatch(sendMessageAC())
    }
}
export const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)