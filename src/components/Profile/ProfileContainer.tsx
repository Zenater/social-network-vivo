import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {setUsersProfile} from "../../redux/profileReducer";
import {PostType} from "./My post/Post/Post";
import {PhotosType} from "../../redux/userReducer";
import {withRouter} from "react-router-dom";

export type MapStateToPropsTypeProfile = {
    profile: string | undefined
}
export type ProfileContainerType = MapStateToPropsTypeProfile& MapDispatchProfile

export type MapDispatchProfile = {
    setUsersProfile: (profile: string) => void
    // photos: PhotosType
}

class ProfileContainer extends React.Component <ProfileContainerType, {}> {

    componentDidMount() {
        let userID =this.props.match.params.userID
if(!userID) {
    userID=2;
}
            axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/`+userID)
            .then(responce => {
                this.props.setUsersProfile(responce.data)
            })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}  />
            </div>
        );
    };
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
    return {
        profile: state.profileReducer.profile
    }
}
let WithRouterComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithRouterComponent);

