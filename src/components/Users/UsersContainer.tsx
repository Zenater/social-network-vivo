import React from 'react';
import {
    followAC,
    InitialStateTypeUsers,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/userReducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    usersPage: InitialStateTypeUsers
    pageSize:InitialStateTypeUsers,
    totalUsersCount: InitialStateTypeUsers,
    currentPage: InitialStateTypeUsers

}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage:(currentPage: number) => void
    setTotalUsersCount: (totalCount: number) =>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage,
        totalUsersCount: state.usersPage,
        currentPage: state.usersPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);