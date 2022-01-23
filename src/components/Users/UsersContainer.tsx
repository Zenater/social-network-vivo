import React from 'react';
import {followAC, InitialStateTypeUsers, setUsersAC, unfollowAC, UsersType} from "../../redux/userReducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";


export type MapStateToPropsType = {
    usersPage: InitialStateTypeUsers
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

// "items": [
//     {
//         "name": "Vadimlyitsko2465877",
//         "id": 21989,
//         "uniqueUrlName": null,
//         "photos": {
//             "small": null,
//             "large": null
//         },
//         "status": null,
//         "followed": false
//     },

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
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