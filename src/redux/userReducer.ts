
let initialState = {
    users:[]
}

export const userReducer = (state = initialState, action: ActionsTypes) => {
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

export const followAC = (userId: string) => ({
    type: 'FOLLOW',
    userId: userId
}) as const

export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersAC = (users: string) =>({type: 'SET-USERS', users} as const)

export type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>|ReturnType<typeof setUsersAC>
