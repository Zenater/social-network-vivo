import React from 'react';

export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    post: Array<PostType>
    messageForNewPost: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBode: string
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}
// export type addPostPropsType = {
//     addPost: (postText: string) => void
// }
export type StoreType = {
    _state: RootStateType
    subscribe:(callback: () => void)=>void
    _onChange:()=>void
    getState:()=>RootStateType
    dispatch:(action: ActionsTypes)=>void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            post: [
                {id: 1, message: "hi, how are you?", likes: 12},
                {id: 2, message: "It my fist posts", likes: 11},
                {id: 3, message: "It my dog", likes: 5},
                {id: 4, message: "Hello everyone", likes: 4}
            ],

        },
        dialogsPage: {
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
            newMessageBode: '',
        },
        sidebar: {},
    },
    dispatch(action) {
        if(action.type==='ADD-POST'){
            let newPost: PostType = {id: new Date().getTime(), message: action.postText, likes: 0};
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.messageForNewPost = ""
            this._onChange();
        } else if (action.type==='CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange();
        } else if(action.type==='UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBode = action.newText
            this._onChange();
        } else if (action.type==='SEND-MESSAGE') {
            let body=this._state.dialogsPage.newMessageBode;
            this._state.dialogsPage.newMessageBode='';
            this._state.dialogsPage.messages.push({id:6,message: body});
            this._onChange();
        }
    }
    ,
    subscribe (callback) {
        this._onChange= callback
    },
    getState(){
        return this._state
    },
    _onChange() {
        console.log('State changed')
    },
}
///////////////////////////////////////////     ACTION CREATER     //////////
export const addPostAC = ( postText:string)=> ({
        type: 'ADD-POST',
        postText:postText
    }) as const

export const changeTextTypeAC = (newText:string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText:newText
    } as const
}
export const updateNewMessageBodeAC = (newText:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newText:newText
    }as const
}
export const sendMessageAC = ()=> {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export type ActionsTypes = ReturnType<typeof addPostAC> |ReturnType<typeof changeTextTypeAC> |
    ReturnType<typeof updateNewMessageBodeAC >| ReturnType<typeof sendMessageAC>

