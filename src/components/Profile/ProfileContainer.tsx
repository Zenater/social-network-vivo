import React, {ReactComponentElement, useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {setUsersProfile} from "../../redux/profileReducer";

export type MapStateToPropsTypeProfile = {
    profile: any
}

type PathParamsType = {
    userID: number
}

export type MapDispatchProfile = {
    setUsersProfile: (profile: any) => void
}

export type Owntype = MapStateToPropsTypeProfile & MapDispatchProfile
export type ProfileContainerType = PathParamsType & Owntype

function ProfileContainer(props: ProfileContainerType) {

    useEffect(() => {
        let userID = props.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(responce => {
                props.setUsersProfile(responce.data)
            });
    }, [])


    return (
        <div>
            <Profile profile={props.profile } userID={props.userID} setUsersProfile={props.setUsersProfile}/>
        </div>
    );

}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
    return {
        profile: state.profileReducer.profile
    }
}
// let WithRouterComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);

