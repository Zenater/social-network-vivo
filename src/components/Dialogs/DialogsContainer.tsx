import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import {Dialogs} from "./Dialogs";
import {DialogsType, MessageType, sendMessageAC} from "../../redux/dialogsReducer";

export type MapStateToPropsType = {
    dialogs: DialogsType[],
    messages: MessageType[],
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    sendMessage: (newMessageBody:string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => dispatch(sendMessageAC(newMessageBody))
    }
}
export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)