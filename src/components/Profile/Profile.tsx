import React, {useEffect} from 'react';
import {MyPosts,} from "./My post/Posts/My posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {PostType} from "../../redux/dialogsReducer";
import {Owntype, ProfileContainerType} from "./ProfileContainer";
import {PhotosType} from "../../redux/userReducer";
import Preloader from "../../common/Preloader/Preloader";
import axios from "axios";

type MyPostsPropsType = {
    post: Array<PostType>
    message: string
    profile: any
    setUsersProfile: (profile: string) => void
    // dispatch: (action: ActionsTypes) => void
    // photos: PhotosType
    userID:number
}

export const Profile = (props: ProfileContainerType) => {
if(!props.profile) {
    return <Preloader/>
}

useEffect(()=> {
    let userID = props.userID;
    if (!userID) {
        userID = 2;
    }
    axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
        .then(responce => {
            props.setUsersProfile(responce.data)
        });
})

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
