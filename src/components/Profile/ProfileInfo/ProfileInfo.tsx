import React from 'react';
import s from './ProfileInfo.module.css';
import {PhotosType} from "../../../redux/userReducer";
import Preloader from "../../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: any
    // photos: PhotosType
}
// photos: PhotosType
export const ProfileInfo = (props: ProfileInfoType) => {
    console.log(props.profile)
    if (!props.profile) {
        return <Preloader/>
    }
    console.log('photo', props.profile.photos.large)
    return (
        <div>
            <div>
                <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}
