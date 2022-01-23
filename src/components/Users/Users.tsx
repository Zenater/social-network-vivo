import axios from 'axios';
import React from 'react';
import s from './User.module.css';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from '../../assests/img/users.jpg'


export type UserLocation = {
    city: string
    country:string
}

export const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length ===0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce=> {
            props.setUsers(responce.data.items)
        })
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={s.userPhoto}/>
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


// [
//     {id: 1, photoUrl:'https://bigpicture.ru/wp-content/uploads/2012/09/lisie-11.jpg',
//         followed: false,fullName:'Dima',status: 'i am boss',location:{city:'Minsk',country:'RF'}},
//     {id: 2, photoUrl:'https://bigpicture.ru/wp-content/uploads/2012/09/lisie-11.jpg',
//         followed: true,fullName:'Dima',status: 'i am boss',location:{city:'Minsk',country:'RF'}},
//     {id: 3, photoUrl:'https://bigpicture.ru/wp-content/uploads/2012/09/lisie-11.jpg',
//         followed: false,fullName:'Dima',status: 'i am boss',location:{city:'Minsk',country:'RF'}},
// ]