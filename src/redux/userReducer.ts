import {UserLocation} from "../components/Users/Users";

export type UsersType = {
    id: number,
    photoUrl:string
    followed:boolean
    status:string
    location: UserLocation
    fullName:string
}

export type InitialStateTypeUsers = {
    users:Array<UsersType>
}
const InitialState:InitialStateTypeUsers = {
    users:[]
}

export const userReducer = (state:InitialStateTypeUsers = InitialState, action: ActionsTypes):InitialStateTypeUsers => {
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
