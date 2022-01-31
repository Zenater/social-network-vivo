import React from 'react';
import {
    followAC,
    InitialStateTypeUsers,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UsersType
} from "../../redux/userReducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/storeRedux";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../../common/Preloader/Preloader";


export type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) =>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export type UserLocation = {
    city: string
    country: string
}

export class UsersComponent extends React.Component<UsersPropsType, {}> {
//componentDidMount - это рождение?
    componentDidMount() {
        this.props.toggleIsFetchingAC(false)
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetchingAC(true)
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`)
            .then(responce => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUsers(responce.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null }
        <Users totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      //usersPage={this.props.usersPage}
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
        isFetching: state.usersPage.isFetching
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);