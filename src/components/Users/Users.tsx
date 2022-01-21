import React from 'react';
import s from './User.module.css';
import {UsersPropsType} from "./UsersContainer";

// export type UsersType = {
//     id: number,
//     photoUrl:string
//     followed:boolean
//     status:string
//     location: UserLocation
//     fullName:string
// }
// export type UserLocation = {
//     city: string
//     country:string
// }

export const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length ===0) {
        props.setUsers([
            {id: 1, photoUrl:'https://bigpicture.ru/wp-content/uploads/2012/09/lisie-11.jpg',
                followed: false,fullName:'Dima',status: 'i am boss',location:{city:'Minsk',country:'RF'}},
            {id: 2, photoUrl:'https://bigpicture.ru/wp-content/uploads/2012/09/lisie-11.jpg',
                followed: true,fullName:'Dima',status: 'i am boss',location:{city:'Minsk',country:'RF'}},
            {id: 3, photoUrl:'https://bigpicture.ru/wp-content/uploads/2012/09/lisie-11.jpg',
                followed: false,fullName:'Dima',status: 'i am boss',location:{city:'Minsk',country:'RF'}},
            ]
        )
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto}/>
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
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>
            )
        }
    </div>
};
