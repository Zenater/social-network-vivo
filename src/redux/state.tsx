import React from 'react';


let onChange = ()=> {
    console.log('State changed')
}


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
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
}



export const state: RootStateType = {
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
        ]
    },
    sidebar: {}
}

export type addPostPropsType = {
    addPost: (postText: string) => void
}

export const addPost =(postText:string) => {
    let newPost:PostType ={id: new Date().getTime(), message:postText , likes: 0};
    state.profilePage.post.push(newPost)
    state.profilePage.messageForNewPost= ""
    onChange();
}
export const changeNewText= (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    onChange();
}
export const subscribe = (callback:()=>void) => {
    onChange = callback
}