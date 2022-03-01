import {UserLocation} from "../components/Users/UsersContainer";
import {usersContainerApi} from "../api/UsersApi/usersContainer";
import {Dispatch} from "redux";
import {usersApi} from "../api/UsersApi/usersApi";


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
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    // toggleFollowingProgress:(isFetching: boolean,userId: number)=>void

}
let InitialStateUsers: InitialStateTypeUsers = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [],
}

export const userReducer = (state: InitialStateTypeUsers = InitialStateUsers, action: ActionsTypes): InitialStateTypeUsers => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
            ;
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
            ;
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURREN-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
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
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
    ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const)

export type ActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> |
    ReturnType<typeof toggleFollowingProgress>


export const getUsersTC = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersContainerApi.getPages(currentPage, pageSize)
            .then(responce => {
                return (dispatch: Dispatch) => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setUsers(responce.data.items));
                    dispatch(setTotalUsersCount(responce.data.totalCount));
                }
            })
    }
}
export const getPageTC = (pageNumber: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersContainerApi.getPageNumber(pageNumber, pageSize)
            .then(responce => {
                return (dispatch: Dispatch) => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setUsers(responce.data.items));
                }
            })
    }
}
// onPageChanged = this.props.getPageTC(this.props.pageNumber,this.props.pageSize)


export const unFollowTC = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgress(true, userId))
        usersApi.unfollow(userId)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export const followTC = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgress(true, userId))
        usersApi.follow(userId)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}