import React from 'react';
import s from "./User.module.css";
import userPhoto from "../../assests/img/users.jpg";
import {InitialStateTypeUsers, UsersType} from "../../redux/userReducer";

export type UsersForUsers = {
    totalUsersCount: number,
    pageSize:number,
    currentPage: number,
    onPageChanged:(pageNumber: number) =>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    //usersPage: InitialStateTypeUsers,
    users: UsersType[]
}
export const Users = (props:UsersForUsers) => {

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
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
