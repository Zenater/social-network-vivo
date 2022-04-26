import React from 'react';
import {
    follow,
    followTC,
    getPageTC,
    requestUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    unFollowTC
} from "../../redux/userReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Users} from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFolowwingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/usersSelectors";

export type MapStateUsersType = ReturnType<typeof mapStateToProps>

export type MapDispatchToPropsType = {
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    getPageTC: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
}
export type UsersPropsType = MapStateUsersType & MapDispatchToPropsType

export type UserLocation = {
    city: string
    country: string
}

export class UsersComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
       this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
       this.props.getPageTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage:getCurrentPage(state) ,
        isFetching: getIsFetching(state),
        followingInProgress: getFolowwingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersTC: requestUsersTC, getPageTC, unFollowTC, followTC,
})(UsersComponent);


