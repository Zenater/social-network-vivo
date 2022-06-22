import React from 'react';
import urs from "./Users.module.css";
import {UsersType} from "../../redux/userReducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User";

type UsersFuncPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}
export const Users = (props: UsersFuncPropsType) => {

    return (
    <div className={urs.box_wrap}>
                <div className={urs.box}>
                    {props.users.map(user => {
                        return <User followingInProgress={props.followingInProgress} followTC={props.followTC}
                                     unFollowTC={props.unFollowTC} user={user} key={user.id}/>
                    })
                    }
                <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            </div>
        </div>
    )
};
