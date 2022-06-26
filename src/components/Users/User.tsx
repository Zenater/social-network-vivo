import React from 'react';
import s from "./User.module.css";
import userPhoto from "../../assests/img/users.jpg";
import {UsersType} from "../../redux/userReducer";
import {NavLink} from "react-router-dom";


export type UsersForUsers = {
    user: UsersType
    unFollowTC: (userId: number) => void
    followTC: (userId: number) => void
    followingInProgress: Array<number>

}
export const User = ({user,unFollowTC,followTC,followingInProgress}:UsersForUsers) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={''} src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={s.userPhoto}/>
                </NavLink>

                <div className={s.inner}>
                    <p className={s.name}>@{user.fullName}</p>
                    <p>{user.status}</p>
                    {user.followed
                        ? <button className={s.follow_btn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {unFollowTC(user.id)}}
                        >Unfollow </button>
                        : <button className={s.follow_btn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {followTC(user.id)}}
                        >Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}
