import {PostType} from "./dialogsReducer";
import {Dispatch} from "redux";
import {profileApi} from "../api/profileApi";

let initialStateProfile = {
    messageForNewPost: "",
    post: [
        {id: 1, message: "hi, how are you?", likes: 12},
        {id: 2, message: "It my fist posts", likes: 11},
        {id: 3, message: "It my dog", likes: 5},
        {id: 4, message: "Hello everyone", likes: 4}
    ],
    profile: "",
    status: '',
}
export type initialStateProfileType = {
    messageForNewPost: string,
    post: Post[],
    profile: string
    status: string
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
                message: action.newPostText, likes: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
            };
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText:string) => ({
    type: 'ADD-POST',
    newPostText
}) as const

export const setUsersProfile = (profile: string) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatus = (status: string) =>({type: 'SET-STATUS', status} as const)

export type ActionsTypes = ReturnType<typeof addPostAC> |
 ReturnType<typeof setUsersProfile> | ReturnType<typeof setStatus>

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data))
        }
        )
}
export const updateStatus = (status: string)=> (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(res=> {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        });
}