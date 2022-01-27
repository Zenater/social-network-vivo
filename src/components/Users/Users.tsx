import axios from 'axios';
import React from 'react';
import s from './User.module.css';
import {UsersPropsType} from "./UsersContainer";
import userPhoto from '../../assests/img/users.jpg'


export type UserLocation = {
    city: string
    country: string
}

export class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalUsersCount);
            })
    }
    onPageChanged = (pageNumber:number)=> {
        this.props.setCurrentPage(pageNumber);
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i =1;i<=pagesCount;i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p=> {
                    return <span className={this.props.currentPage === p  ? s.selectedPage : ''}
                        onClick={(e)=>this.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
}
