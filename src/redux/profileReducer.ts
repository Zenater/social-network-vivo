import {PostType } from "./store";

let initialState = {
    messageForNewPost: "",
    post: [
        {id: 1, message: "hi, how are you?", likes: 12},
        {id: 2, message: "It my fist posts", likes: 11},
        {id: 3, message: "It my dog", likes: 5},
        {id: 4, message: "Hello everyone", likes: 4}
    ],
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText, likes: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            };
        }
        case 'CHANGE-NEW-TEXT': {
            return {
                ...state,
                messageForNewPost: action.newText
            };
        }
        default:
            return state
    }
}

export const addPostAC = (postText: string) => ({
    type: 'ADD-POST',
    postText: postText
}) as const

export const changeTextTypeAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextTypeAC>
