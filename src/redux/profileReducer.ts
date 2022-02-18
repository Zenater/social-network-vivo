import {PostType} from "./dialogsReducer";
import {Dispatch} from "redux";
import axios from "axios";

let initialStateProfile = {
    messageForNewPost: "",
    post: [
        {id: 1, message: "hi, how are you?", likes: 12},
        {id: 2, message: "It my fist posts", likes: 11},
        {id: 3, message: "It my dog", likes: 5},
        {id: 4, message: "Hello everyone", likes: 4}
    ],
    profile: "",
    newPostText: ""
}
export type initialStateProfileType = {
    messageForNewPost: string,
    post: Post[],
    profile: string
    newPostText: string
}

type Post = {
    id: number
    message: string
    likes: number
}

export const profileReducer = (state: initialStateProfileType = initialStateProfile, action: ActionsTypes): initialStateProfileType => {
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
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
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
export const setUsersProfile = (profile: string) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextTypeAC>
    | ReturnType<typeof setUsersProfile>


export const getUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfile(userId)
            .then(responce => {
                dispatch(setUsersProfile(responce.data))
            })
    }
}

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fb2ab079-08d1-443f-b919-56e507e1bcd7'
    },
    withCredentials: true
})

export const profileApi = {
    getProfile(userID: number) {
        return instance.get<any>(`/profile/` + userID)
    }
}

