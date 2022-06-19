import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
            <li className={s.nav__item}>
                <NavLink  to='/profile'
                          className={({isActive}) =>  isActive ? s.active  : s.nav__link}
                >Profile</NavLink>
            </li>
            <li className={s.nav__item}>
                <NavLink to='/dialogs'
                         className={({isActive}) =>  isActive ? s.active : s.nav__link}
                >Message</NavLink>
            </li>
            <li className={s.nav__item}>
                <NavLink to='/news'
                         className={({isActive}) =>  isActive ? s.active : s.nav__link}
                >News</NavLink>
            </li>
            <li className={s.nav__item}>
                <NavLink to='/music'
                         className={({isActive}) =>  isActive ? s.active : s.nav__link}
                >Music</NavLink>
            </li>
            <li className={s.nav__item}>
                <NavLink to='/settings'
                         className={({isActive}) =>  isActive ? s.active : s.nav__link}
                >Settings</NavLink>
            </li>
                <div className={s.nav__item}>
                <NavLink to='/users'
                         className={({isActive}) =>  isActive ? s.active : s.nav__link}
                >Users</NavLink>
            </div>
            </ul>
        </nav>
    )
}
