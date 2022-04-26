import React, {ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatusHooks} from "../ProfileStatus/ProfileStatusHooks";
import userPhoto from "../../../assests/img/users.jpg";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {saveProfile} from "../../../redux/profileReducer";
import ProfileDataForm, {ProfileType} from "./ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus:(status: string)=>void
    savePhoto: (file: any) => void
    isOwner: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
}

export const ProfileInfo = ({profile,status,updateStatus,savePhoto,isOwner,saveProfile}: ProfileInfoType) => {

    let [editMode, setEditMode] = useState(false);

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
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto } className={s.img}/>
                {
                    isOwner && <input type={"file"} onChange={onMainPhotoSelected} />
                    }
                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
            </div>
            <div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                {/*<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>*/}
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: any
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData = ({profile, isOwner, goToEditMode}:ProfileDataPropsType) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {
            Object.keys(profile.contacts)
                .map((key)  => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                })}
        </div>
    </div>
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
{/*            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
{/*            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
{/*        })}*/}
{/*        </div>*/}
{/*    </div>*/}
{/*}*/}

{/*const Contact = ({contactTitle, contactValue}:any) => {*/}
{/*    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>*/}
{/*}*/}

