import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {getStatus, setUsersProfile, updateStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

export type MapStateToPropsTypeProfile = {
    profile: any
    status: string
}

type PathParamsType = {
    // userID: number
}

export type MapDispatchProfile = {
    setUsersProfile: (profile: any) => void
    updateStatus:(status: string)=>void
        getStatus:(userId: number) =>void
}
export type Owntype = MapStateToPropsTypeProfile & MapDispatchProfile
export type ProfileContainerType = PathParamsType & Owntype

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
    }
}

const ProfileContainer = (props: ProfileContainerType) => {

    let params:any = useParams<any>();

    useEffect(() => {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + params.userID)
            .then(res => {
                props.setUsersProfile(res.data)
                props.getStatus(res.data)
            });
    }, [])

    return (
        <Profile status={props.status} profile={props.profile}  setUsersProfile={setUsersProfile}
                 getStatus={getStatus} updateStatus={updateStatus}/>
    )
}
export default connect<MapStateToPropsTypeProfile, MapDispatchProfile, {}, AppRootStateType>(mapStateToProps,
    {setUsersProfile,getStatus,updateStatus})(ProfileContainer);
