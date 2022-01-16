import {PostType, StoreType} from "./store";


let initialState = {
        dialogs: [
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Jon'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Oleg'},
            {id: 6, name: 'Igor'}
        ],
        messages: [
            {id: 1, message: 'Yo'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'i tried'}
        ],
        newMessageBody: '',
    }

export const dialogsReducer = (state=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.newText
            // state._state.dialogsPage.newMessageBody = action.newText
            // // this._onChange();
            return state
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            // this._onChange();
            return state
        }
        default:return state
    }
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const updateNewMessageBodyAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newText: newText
    } as const
}


export type ActionsTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>