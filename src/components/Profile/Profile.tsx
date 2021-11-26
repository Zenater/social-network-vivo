import React from 'react';
import s from './Profile.module.css';
import {MyPosts,} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {PostPropsType} from "../../index";



export const Profile = (props: PostPropsType) => {


    return (
        <div>
            <ProfileInfo/>
            <Post message={''} likes={0}/>
            <MyPosts posts={props.state.posts}/>

        </div>
    )
}
