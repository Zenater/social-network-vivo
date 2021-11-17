import React from 'react';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}
