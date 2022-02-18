import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: any
}

export const ProfileInfo = (props: ProfileInfoType) => {
    console.log(props.profile)
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt={''} src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img alt={''} src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}
