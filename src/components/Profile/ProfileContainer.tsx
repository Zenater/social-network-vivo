import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {
    getProfileUser,
    getStatus,
    savePhoto,
    saveProfile,
    setUsersProfile,
    updateStatus
} from "../../redux/profileReducer";
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

type MapDispatchProfileType = {
    // setUsersProfile: (profile: any) => void
    getProfileUser: (userId: number) =>void
    updateStatus: (status: string) => void
    getStatus: (userId: number) => void
    savePhoto: (file: any) => void
    saveProfile:(profile:any)=> void
}
type Owntype = MapStateToPropsTypeProfile & MapDispatchProfileType
type ProfileContainerType = PathParamsType & Owntype

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
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
    // const status = useSelector<AppRootStateType,string>(state => state.profileReducer.status)
    useEffect(() => {
        let userId = params.userID
        if (!userId) {
            userId = props.authorizedUserId;
        }

        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                props.getProfileUser(userId)
                props.getStatus(userId)
            });
    }, [props.authorizedUserId,props.status])


    return (
        <Profile status={props.status} profile={props.profile} getProfileUser={props.getProfileUser}
                 getStatus={props.getStatus} updateStatus={props.updateStatus} post={props.post}
                 savePhoto={props.savePhoto} saveProfile={props.saveProfile}

        />
    )
}
export default connect<MapStateToPropsTypeProfile, MapDispatchProfileType, {}, AppRootStateType>(mapStateToProps,
    {getProfileUser, getStatus, updateStatus, savePhoto,saveProfile})(ProfileContainer);
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
}*!/*/
