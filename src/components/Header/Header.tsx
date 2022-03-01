import React, {useEffect} from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {setAuthUserData} from "../../redux/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";

type MapStateToPropsType = {
    userId: null
    email: null
    login: null
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    setAuthUserData: (userId: null, email: null, login: null)=>void
}
export type HeaderType = {
    isAuth:boolean
    login:string
}

export  const Header = () => {
    const dispatch = useDispatch()
    const {isAuth, login} = useSelector((state:AppRootStateType)=>state.auth)

   useEffect(()=> {
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
           withCredentials: true
       }).then(responce => {
               if (responce.data.resultCode === 0) {
                   let {id, login, email} = responce.data.data;
                   dispatch(setAuthUserData(id, email, login))
               }
           }
       )
   },[])

    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqs4OcIVXVzUFn9Kz1k66lVAJf-LPO-6jDg&usqp=CAU'/>

       <div className={s.loginBlock}>
           {
               !isAuth && <NavLink to={'/login'}>Login</NavLink>
           }

       </div>
        </header>
    )
}
