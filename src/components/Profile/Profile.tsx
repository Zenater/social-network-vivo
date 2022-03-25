import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {PostType} from "../../redux/dialogsReducer";
import {ProfileContainerType} from "./ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";

type MyPostsPropsType = {
    post: Array<PostType>
    message: string
    profile: any
    setUsersProfile: (profile: string) => void
    // dispatch: (action: ActionsTypes) => void
    // photos: PhotosType
    userID: number
}

export const Profile = (props: ProfileContainerType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    console.log('profile')

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <Post message={''} likes={0}/>
            {/*<MyPosts post={props.post}*/}
            {/*         // dispatch={props.dispatch.bind(props.message)}*/}
            {/*         message={props.message}*/}
            {/*/>*/}
        </div>
    )
}
