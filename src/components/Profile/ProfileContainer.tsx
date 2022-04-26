import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {getProfileUser, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {ProfileType} from "./ProfileInfo/ProfileDataForm";


type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchProfileType = {
    getProfileUser: (userId: number) =>void
    updateStatus: (status: string) => void
    getStatus: (userId: number) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type ProfileContainerType =MapPropsType & MapDispatchProfileType

const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
        post: state.profileReducer.post,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

const ProfileContainer = (props: ProfileContainerType) => {

    let params: any = useParams<any>();
    let isOwner=params.userID
    // const status = useSelector<AppRootStateType,string>(state => state.profileReducer.status)
    useEffect(() => {
        let userId = params.userID
        if (!userId) {
            userId = props.authorizedUserId;
        }
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(()=> {
                props.getProfileUser(userId)
                props.getStatus(userId)
            });
    }, [props.authorizedUserId,props.status])


    return (
        <Profile status={props.status} profile={props.profile} getProfileUser={props.getProfileUser}
                 getStatus={props.getStatus} updateStatus={props.updateStatus} post={props.post}
                 savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                 isOwner={!isOwner}
        />
    )
}

export default connect(mapStateToProps,
    {getProfileUser, getStatus, updateStatus, savePhoto,saveProfile})(ProfileContainer)

//type connect
// <MapPropsType, MapDispatchProfileType, {}, AppRootStateType>
