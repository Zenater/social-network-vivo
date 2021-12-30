import React from 'react';
import s from './Profile.module.css';
import {MyPosts,} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {PostType} from "../../redux/state";

export type ProfilePageType = {
    posts: PostType[]
    addPostCallBack: (postText:string)=>void
}


export const Profile = (props: ProfilePageType) => {

    return (
        <div>
            <ProfileInfo/>
            <Post message={''} likes={0}/>
            <MyPosts posts={props.posts}
                     addPostCallBack={props.addPostCallBack}/>
        </div>
    )
}
