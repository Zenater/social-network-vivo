import { v1 } from "uuid"

export type PostType = {
    id: number
    message: string
    likes: number
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody:string
}

export type MessageType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
    image:string
}

const initialState = {
    dialogs: [
        {id: v1(), name: 'Valera',image: 'https://iqonic.design/themes/socialv/html/images/user/05.jpg'},
        {id: v1(), name: 'Sveta',image: 'https://iqonic.design/themes/socialv/html/images/user/07.jpg'},
        {id: v1(), name: 'Jon',image: 'https://iqonic.design/themes/socialv/html/images/user/09.jpg'},
        {id: v1(), name: 'Victor',image: 'https://iqonic.design/themes/socialv/html/images/user/08.jpg'},
        {id: v1(), name: 'Oleg',image: 'https://iqonic.design/themes/socialv/html/images/user/06.jpg'},
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'What are you doing?'},
        {id: v1(), message: 'There is the house where my family lives.'},
        {id: v1(), message: 'i tried'},
        {id: v1(), message: 'We go jogging every Sunday!'},
        {id: v1(), message: 'They didn’t go to school last year.'}
    ] as Array<MessageType>,
}
export type InitialStateTypeDialogs = typeof initialState

export const dialogsReducer = (state: InitialStateTypeDialogs= initialState, action: ActionsTypes):InitialStateTypeDialogs => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state
    }
}
export const sendMessageAC = (newMessageBody:string) => {
    return {
        type: 'SEND-MESSAGE',newMessageBody
    } as const
}

export type ActionsTypes =  ReturnType<typeof sendMessageAC>