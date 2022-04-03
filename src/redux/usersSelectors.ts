import {AppRootStateType} from "./storeRedux";

export const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users
}
export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppRootStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
export const getFolowwingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}