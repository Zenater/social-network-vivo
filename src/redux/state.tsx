import React from 'react';
import {ProfilePageType} from "../components/Profile/Profile";

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

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar?: SidebarType
    addPostCallback: (postMessage:string)=>void
}

export const state = {
    profilePage: {
        posts: [
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

export const addPost =(postMessage:string) => {
    let newPost:PostType ={id: new Date().getTime(), message:postMessage , likes: 0};
    state.profilePage.posts.push(newPost)
}