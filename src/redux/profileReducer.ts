import {changeTextTypeAC, PostType, sendMessageAC, StoreType} from "./store";


export const profileReducer = (state:StoreType ,action:ActionsTypes)=> {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {id: new Date().getTime(),
                message: action.postText, likes: 0};
            state.profilePage.post.push(newPost)
            _state.profilePage.messageForNewPost = ""
          return state
        }
        case 'CHANGE-NEW-TEXT': {
            this._state.profilePage.messageForNewPost = action.newText
            return state
        }
        default: return state
    }
}

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

export type ActionsTypes = ReturnType<typeof addPostAC> |ReturnType<typeof changeTextTypeAC> |
    ReturnType<typeof updateNewMessageBodyAC >| ReturnType<typeof sendMessageAC>