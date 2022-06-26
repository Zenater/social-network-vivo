import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";
import MyPostsContainer from "./My post/MyPosts/My PostsContainer";
import {PostType} from "./My post/Post/Post";
import {ProfileType} from "./ProfileInfo/ProfileDataForm";

type MyPostsPropsType = {
    getProfileUser?:(userId: number) => void
    updateStatus: (status: string) => void
    profile: ProfileType | null
    status: string
    getStatus: (userId: number) => void
    post: Array<PostType>
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    isOwner: boolean
}

export const Profile = (props: MyPostsPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer post={props.post} profile={props.profile}/>
        </div>
    )
}
