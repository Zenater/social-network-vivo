import {PostType} from "./dialogsReducer";

let initialStateProfile = {
    messageForNewPost: "",
    post: [
        {id: 1, message: "hi, how are you?", likes: 12},
        {id: 2, message: "It my fist posts", likes: 11},
        {id: 3, message: "It my dog", likes: 5},
        {id: 4, message: "Hello everyone", likes: 4}
    ],
    profile:  "",
    newPostText:""
}
export type initialStateProfileType = {
    messageForNewPost: string,
    post: Post[],
    profile: string
    // photos: PhotosType
    newPostText:string
}

type Post = {
    id: number
    message:string
    likes: number
}

// photos: PhotosType


export type PhotosType = {
    small: null
    large: null
}

export const profileReducer = (state : initialStateProfileType= initialStateProfile, action: ActionsTypes):initialStateProfileType => {
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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeTextTypeAC>| ReturnType<typeof setUsersProfile>
