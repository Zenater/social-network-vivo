import {UserLocation} from "../components/Users/UsersContainer";

export type UsersType = {
    id: number,
    photoUrl: string
    followed: boolean
    status: string
    location: UserLocation
    fullName: string
    photos: PhotosType

}
export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type InitialStateTypeUsers = {
    users: Array<UsersType>
    totalCount: number
    pageSize:number
    currentPage: number
    isFetching: boolean
}
let InitialStateUsers: InitialStateTypeUsers = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 2,
    isFetching: true
}

export const userReducer = (state: InitialStateTypeUsers = InitialStateUsers, action: ActionsTypes): InitialStateTypeUsers => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        };
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        };
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURREN-PAGE': {
            return {...state, currentPage:action.currentPage }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state,totalCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state,isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userId: number) => ({
    type: 'FOLLOW',
    userId: userId
}) as const

export const unfollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURREN-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

export type ActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>| ReturnType<typeof toggleIsFetching>
