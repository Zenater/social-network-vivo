import React from 'react';
import s from "./User.module.css";
import userPhoto from "../../assests/img/users.jpg";
import {UsersType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../../common/Paginator/Paginator";

export type UsersForUsers = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    followingInProgress: number[]
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    unFollowTC: (userId: number) => void
    followTC: (userId: number) => void
}
export const Users = (props: UsersForUsers) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.wrapper}>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt={''} src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollowTC(u.id)
                        }}
                        >Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.followTC(u.id)
                        }}
                        >Follow</button>}
                </div>
            </span>
                    <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
                </div>
            )
        }
    </div>
};
