import React from 'react';
import {MyPosts,} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import { PostType} from "../../redux/store";
import {ActionsTypes} from "../../redux/profileReducer";

type MyPostsPropsType = {
    post: Array<PostType>
    message: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: MyPostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <Post message={''} likes={0}/>
            <MyPosts post={props.post}
                     dispatch={props.dispatch.bind(props.message)}
                     message={props.message}
            />

        </div>
    )
}
