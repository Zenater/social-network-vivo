import React from 'react';
import s from "./User.module.css";
import userPhoto from "../../assests/img/users.jpg";
import {unFollowTC,followTC, UsersType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";

export type UsersForUsers = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    users: UsersType[]
    followingInProgress: number[]
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    // unFollowTC: (userId: number) => void
    // followTC: (userId: number) => void
}
export const Users = (props: UsersForUsers) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           unFollowTC(u.id)}}
                        >Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           followTC(u.id)}}
                        >Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
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
