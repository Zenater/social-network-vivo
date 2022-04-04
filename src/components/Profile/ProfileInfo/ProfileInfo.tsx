import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {ProfileStatusHooks} from "../ProfileStatus/ProfileStatusHooks";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus:(status: string)=>void
}

export const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img alt={''} src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img alt={''} src={props.profile.photos.large}/>
                ava+description
            </div>
            <div>
                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
