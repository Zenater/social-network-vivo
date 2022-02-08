import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/userReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Users} from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersContainerApi} from "../../api/UsersApi/usersContainer";


export type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching: boolean,userId: number)=>void


}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export type UserLocation = {
    city: string
    country: string
}

export class UsersComponent extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersContainerApi.getPages(this.props.currentPage, this.props.pageSize)
            .then(responce => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersContainerApi.getPageNumber(pageNumber)
            .then(responce => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(responce.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
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

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,toggleFollowingProgress
})(UsersComponent);