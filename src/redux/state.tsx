import React from 'react';


export const state = {
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you?", likes: 12},
            {id: 2, message: "It my fist posts", likes: 11}
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
    }
}