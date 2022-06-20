import React from 'react';
import s from './Friends.module.css';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";


export type NavBarDataType = {
    id: string
    friend: string
}
export type NavbarPageType = {
    navBarData: Array<NavBarDataType>
}

const Friends = () => {
  const arrayOfFriends =useSelector<AppRootStateType,Array<NavBarDataType>>(state=>state.navBarPage.navBarData)

  const nameOfArrayFriend = arrayOfFriends.map(friend => {
    return <div className={s.name} key={friend.id}>{friend.friend}</div>
  })

  return (
    <div>
      <h3 className={s.title}>Friend Lists</h3>
      <div className={s.container}>
        {nameOfArrayFriend}
      </div>
    </div>
  )
}

export default Friends;
