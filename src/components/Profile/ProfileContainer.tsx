import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {setUsersProfile} from "../../redux/profileReducer";
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
            .then(responce => {
                props.setUsersProfile(responce.data)
            });
    }, [])

    return (
        <Profile status={props.status} profile={props.profile}  setUsersProfile={setUsersProfile}/>
    )
}
export default connect<MapStateToPropsTypeProfile, MapDispatchProfile, {}, AppRootStateType>(mapStateToProps,
    {setUsersProfile})(ProfileContainer);
