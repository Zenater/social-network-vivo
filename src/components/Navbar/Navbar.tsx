import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink  to='/profile' className={({isActive}) =>  isActive ? s.gold : s.white}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' className={({isActive}) =>  isActive ? s.gold : s.white}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({isActive}) =>  isActive ? s.gold : s.white}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({isActive}) =>  isActive ? s.gold : s.white}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({isActive}) =>  isActive ? s.gold : s.white}>Settings</NavLink>
            </div>    <div className={s.item}>
                <NavLink to='/users' className={({isActive}) =>  isActive ? s.gold : s.white}>Users</NavLink>
            </div>
        </nav>
    )
}
