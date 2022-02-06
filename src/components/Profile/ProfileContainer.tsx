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



export class ProfileContainer extends React.Component<ProfileContainerType ,{}> {

    componentDidMount() {
        let userID = this.props.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(responce => {
               this.props.setUsersProfile(responce.data)
            });
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
    return {
        profile: state.profileReducer.profile
    }
}
// let WithRouterComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);

