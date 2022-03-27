import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";
import MyPostsContainer from "./My post/MyPosts/My PostsContainer";
import {PostType} from "./My post/Post/Post";

type MyPostsPropsType = {
    setUsersProfile: (profile: string) => void
    updateStatus:(status: string)=>void
    profile: any
    status: string
    getStatus:(userId: number) =>void
    post: Array<PostType>

}

export const Profile = (props: MyPostsPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    console.log('profile')

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer post={props.post} />
        </div>
    )
}
