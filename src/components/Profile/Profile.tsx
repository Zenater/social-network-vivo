import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
