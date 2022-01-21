import {UsersType} from "../components/Users/Users";


export type InitialStateType = {
    users:Array<UsersType>
}
const InitialState:InitialStateType = {
    users:[]
}

export const userReducer = (state:InitialStateType = InitialState, action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }
        };
        case 'UNFOLLOW': {
        return  {
            ...state,
            users: state.users.map( u=> {
                if(u.id===action.userId) {
                    return {...u,followed: false}
                }
                return u
            }
            )
        }
        }
        case 'SET-USERS': {
            return {
                ...state,users: [...state.users,...action.users]
            }
        }


        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    userId: userId
}) as const

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>) =>({type: 'SET-USERS', users} as const)

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>|ReturnType<typeof setUsersAC>
