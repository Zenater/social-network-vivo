import React from 'react';
import {
    follow, followTC,
    getPageTC,
    getUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, unFollowTC,
    UsersType
} from "../../redux/userReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Users} from "./Users";
import Preloader from "../../common/Preloader/Preloader";


export type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}
export type MapDispatchToPropsType = {
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    // setUsers: (users: Array<UsersType>) => void
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    getPageTC: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unFollowTC: (userId: number) => void
    // getUsersTC: (currentPage: number,  pageSize: number)=>void
    // getPageNumber:(pageNumber:number,pageSize:number)=>void

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export type UserLocation = {
    city: string
    country: string
}

export class UsersComponent extends React.Component<UsersPropsType, {}> {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsersTC, getPageTC, unFollowTC, followTC,
})(UsersComponent);


/*
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetchingAC: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
*/

