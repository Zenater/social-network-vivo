import React from 'react';
import {followAC, InitialStateType, setUsersAC, unfollowAC} from "../../redux/userReducer";
import {connect} from "react-redux";
import  {UsersType} from "./Users";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    usersPage: InitialStateType
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
        // users: state.userPage.users
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);