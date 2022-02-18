import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {getUserProfileTC, setUsersProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

export type MapStateToPropsTypeProfile = {
    profile: any
    isAuth: boolean
}

export type MapDispatchProfile = {
    setUsersProfile: (profile: any) => void
}

export type ProfileContainerType = MapStateToPropsTypeProfile & MapDispatchProfile

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.auth.isAuth
    }
}

const ProfileContainer = (props: ProfileContainerType) => {

    let params = useParams() as {userID: string} ;
    let dispatch = useDispatch()

    const {isAuth, login} = useSelector((state:AppRootStateType)=>state.auth)


    useEffect(()=> {
         dispatch(getUserProfileTC(+params.userID))
    }, [])

    return (
        <Profile isAuth={isAuth} profile={props.profile} setUsersProfile={props.setUsersProfile}/>
    )
}
export default connect<MapStateToPropsTypeProfile, MapDispatchProfile, {}, AppRootStateType>(mapStateToProps,
    {setUsersProfile})(ProfileContainer);
