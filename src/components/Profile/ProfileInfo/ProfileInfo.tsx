import React, {ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatusHooks} from "../ProfileStatus/ProfileStatusHooks";
import userPhoto from "../../../assests/img/users.jpg";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus:(status: string)=>void
    savePhoto: (file: any) => void
}

export const ProfileInfo = ({profile,status,updateStatus,savePhoto}: ProfileInfoType) => {
    // DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e:DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> ) => {
        // @ts-ignore
        if(e.target.files.length) {
            // @ts-ignore
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto } className={s.img}/>
                <input type="file" onChange={onMainPhotoSelected}/>
            </div>
            <div>
                <ProfileStatusHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
