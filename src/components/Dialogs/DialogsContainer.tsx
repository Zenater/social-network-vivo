import React from 'react';
import {InitialStateType} from "../../redux/userReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

export type MapStateToPropsType = {
    messagePage: InitialStateType
}
export type MapDispatchToPropsType = {
    newMessageText: (newMessage: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        messagePage: state.messagePage
        // messagePage: props.messagePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newMessageText: (newMessage: string) => {
            dispatch(updateNewMessageBodyAC(newMessage))
        },
        addMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(Users);
export const DialogContainer = connect(mapStateToProps,mapDispatchToProps(Dialogs))