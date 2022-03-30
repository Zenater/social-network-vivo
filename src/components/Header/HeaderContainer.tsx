import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Header} from "./Header";
import {getAuthUserData, logout} from "../../redux/authReducer";

export type MapStateToPropsTypeHeaderContainer = {
    isAuth: boolean
    login: any
}
export type MapDispatchToPropsType = {
    getAuthUserData: () =>void
    logout: ()=> void
}
export type HeaderContainerPropsType = MapStateToPropsTypeHeaderContainer & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, {}> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} isAuth={this.props.isAuth}  login={this.props.login}
                       getAuthUserData={this.props.getAuthUserData} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsTypeHeaderContainer => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
