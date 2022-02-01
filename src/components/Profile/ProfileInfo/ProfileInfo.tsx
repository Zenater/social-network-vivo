import React from 'react';
import s from './ProfileInfo.module.css';
import {PhotosType} from "../../../redux/userReducer";
type ProfileInfoType = {
    profile: any
    // photos: PhotosType
}
// photos: PhotosType
export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile}/>
                ava+description
            </div>
        </div>
    )
}
