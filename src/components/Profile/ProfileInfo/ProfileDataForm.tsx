import React from 'react';
import {createField, Input, Textarea} from "../../../common/FormsControl/Textarea";
import {reduxForm} from "redux-form";
import s from './../../Login/LoginForm.module.css'

type PropsType = {
    profile: ProfileType
}
const ProfileDataForm = ({handleSubmit, profile, error}: any) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>
        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            {/*<b>Contacts</b>: {*/}
            {/*Object*/}
            {/*    .keys(profile.contacts)*/}
            {/*    .map(key => {*/}
            {/*return <div key={key} className={a.contact}>*/}
            {/*    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>*/}
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
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
// const ProfileDataFormReduxForm = reduxForm<any>({form: 'edit-profile'})(ProfileDataForm)
const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}