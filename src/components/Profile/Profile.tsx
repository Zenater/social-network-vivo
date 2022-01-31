import React from 'react';
import {MyPosts,} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {PostType} from "../../redux/dialogsReducer";
import {ProfileContainerType} from "./ProfileContainer";
import {PhotosType} from "../../redux/userReducer";
import Preloader from "../../common/Preloader/Preloader";

type MyPostsPropsType = {
    post: Array<PostType>
    message: string
    profile: string | undefined
    // dispatch: (action: ActionsTypes) => void
    // photos: PhotosType

}

export const Profile = (props: ProfileContainerType) => {
if(!props.profile) {
    return <Preloader/>
}
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <Post message={''} likes={0}/>
            {/*<MyPosts post={props.post}*/}
            {/*         // dispatch={props.dispatch.bind(props.message)}*/}
            {/*         message={props.message}*/}
            {/*/>*/}

        </div>
    )
}
