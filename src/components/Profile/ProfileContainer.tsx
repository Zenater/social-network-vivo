import React, {ComponentType, ReactComponentElement, useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {setUsersProfile} from "../../redux/profileReducer";
import {Route, useLocation, useParams} from "react-router-dom";

export type MapStateToPropsTypeProfile = {
    profile: any
}

type PathParamsType = {
    // userID: number
}

export type MapDispatchProfile = {
    setUsersProfile: (profile: any) => void
}

export type Owntype = MapStateToPropsTypeProfile & MapDispatchProfile
export type ProfileContainerType = PathParamsType & Owntype



// export class ProfileContainer extends React.Component<ProfileContainerType> {
//
//     componentDidMount() {
//         // let params = useParams();
//         // console.log(params)
//         let userID = 0
//         if (!userID) {
//             userID = 2;
//         }
//         axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
//             .then(responce => {
//                this.props.setUsersProfile(responce.data)
//             });
//     }
//
//     render() {
//         return <>
//             <Profile {...this.props} profile={this.props.profile}/>
//         </>
//     }
// }

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeProfile => {
    return {
        profile: state.profileReducer.profile
    }
}
//
//
// const useRouter:any = (Child:ComponentType<any>)=>{
//
//     let params = useParams();
//     console.log(params)
//     return <Child/>
// }

// const withRouter = (ConnectedComponent:any) => {
//     const witRouterComponent = () => (
//         <Route element={
//             // <ConnectedComponent {...props} />} />
//     );
//     return witRouterComponent;
// };


// let WithRouterComponent:any = withRouter(ProfileContainer)({})

// export default connect<MapStateToPropsTypeProfile, MapDispatchProfile, {}, AppRootStateType>(mapStateToProps, {setUsersProfile})(WithRouterComponent);
const ProfileContainer = (props:ProfileContainerType)=>{
    let {userID} = useParams<any>();//type!

    console.log(userID)
    console.log("test")

    useEffect(()=>{
        let testId = userID || 1
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/`+testId )
            .then(responce => {
                props.setUsersProfile(responce.data)
            });
    },[])

    return <Profile profile={props.profile} setUsersProfile={props.setUsersProfile}/>
}
export default connect<MapStateToPropsTypeProfile, MapDispatchProfile, {}, AppRootStateType>(mapStateToProps, {setUsersProfile})(ProfileContainer);
