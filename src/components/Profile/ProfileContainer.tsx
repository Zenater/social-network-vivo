import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {getStatus, setUsersProfile, updateStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {PostType} from "./My post/Post/Post";

export type MapStateToPropsTypeProfile = {
    profile: any
    status: string
    post: Array<PostType>
    authorizedUserId: null
    isAuth: boolean
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
        post: state.profileReducer.post,
        authorizedUserId:state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

const ProfileContainer = (props: ProfileContainerType) => {

    let params:any = useParams<any>();

    useEffect(() => {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + params.userID)
            .then(res => {
                props.setUsersProfile(res.data)
                props.getStatus(params.userID)
            });
    }, [])

    return (
        <Profile status={props.status} profile={props.profile}  setUsersProfile={setUsersProfile}
                 getStatus={getStatus} updateStatus={updateStatus} post={props.post}/>
    )
}
export default connect<MapStateToPropsTypeProfile, MapDispatchProfile, {}, AppRootStateType>(mapStateToProps,
    {setUsersProfile,getStatus,updateStatus,})(ProfileContainer);
/*
const ProfileContainer = (props: ProfileContainerType) => {

    let params:any = useParams<any>();

    useEffect(() => {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + params.userID)
            .then(res => {
                props.setUsersProfile(res.data)
                props.getStatus(params.userID)
            });
    }, [])*/
/*
class ProfileContainer extends React.Component<ProfileContainerType, any> {
    componentDidMount() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (userId) {
            userId = this.props.authorizedUserId
        }
        this.props.setUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile status={this.props.status} profile={this.props.profile} setUsersProfile={this.setUsersProfile}
                     getStatus={this.getStatus} updateStatus={this.updateStatus} post={this.props.post}/>
        )
    }
}*/
