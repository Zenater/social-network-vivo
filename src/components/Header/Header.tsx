import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Search from "./SearchInput/Search";
import logo from "../Header/image/logo.jpg";


type MapStateToPropsType = {
    // userId: null
    // email: null
    login: null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    logout: () => void
}
export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div>
                <a href='#' className={s.link}>
                    <img src={logo} alt='logo' className={s.header__logo}/>
                    <h1 className={s.title}>SocialReact</h1>
                </a>
            </div>
            <Search/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
            {/*<HeaderNavBarContainer {...props}/>*/}
        </header>
    )
}

/*    const dispatch = useDispatch()
    const {isAuth, login} = useSelector((state:AppRootStateType)=>state.auth)
   useEffect(()=> {
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
           withCredentials: true
       }).then(responce => {
               if (responce.data.resultCode === 0) {
                   let {id, login, email} = responce.data.data;
                   dispatch(setAuthUserData(id, email, login, true))
               }
           }
       )
   },[])*/
// <header className={s.header}>
//     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqs4OcIVXVzUFn9Kz1k66lVAJf-LPO-6jDg&usqp=CAU'/>
//     <div className={s.loginBlock}>
//         { props.isAuth
//             ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
//             : <NavLink to={'/login'}>Login</NavLink>
//         }
//     </div>