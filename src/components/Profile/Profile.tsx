import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./My post/Post/Post";
import {ProfileContainerType} from "./ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";

export const Profile = (props: ProfileContainerType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    if(!props.isAuth) return <Navigate to="/login"/>

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <Post message={''} likes={0}/>
            {/*<MyPosts post={props.post}*/}
            {/*         // dispatch={props.dispatch.bind(props.message)}*/}
            {/*         message={props.message}*/}
            {/*/>*/}
        </div>
    )
}
