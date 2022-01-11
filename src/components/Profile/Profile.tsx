import React from 'react';
import {MyPosts,} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {PostType} from "../../redux/store";

type MyPostsPropsType = {
    post: Array<PostType>
    addPostCallBack: (postText:string)=>void
    message: string
    changeTextCallback:(newText: string)=>void
}

export const Profile = (props: MyPostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <Post message={''} likes={0}/>
            <MyPosts post={props.post}
                     addPostCallBack={props.addPostCallBack}
                     message={props.message}
                     changeTextCallback={props.changeTextCallback}/>
        </div>
    )
}
