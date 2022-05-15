
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
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Jon'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Oleg'},
        {id: 6, name: 'Igor'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'i tried'}
    ] as Array<MessageType>,
}
export type InitialStateTypeDialogs = typeof initialState

export const dialogsReducer = (state: InitialStateTypeDialogs= initialState, action: ActionsTypes):InitialStateTypeDialogs => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
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