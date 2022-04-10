import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatusHooks} from "../ProfileStatus/ProfileStatusHooks";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus:(status: string)=>void
}

export const ProfileInfo = ({profile,status,updateStatus}: ProfileInfoType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt={''} src={profile.photos.large}/>
                ava+description
            </div>
            <div>
                <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
