import React from 'react';
import {followAC, setUsersAC, unfollowAC} from "../../redux/userReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {AppRootStateType} from "../../redux/storeRedux";


    const mapStateToProps = (state: AppRootStateType) => {
      return {
          users: state.userPage.users
      }
    }

    const mapDispatchToProps  = (dispatch) => {
      return {
          follow: (userId)=> {
              dispatch(followAC(userId))
          },
          unfollow: (userId)=> {
              dispatch(unfollowAC(userId))
          },
          setUsers: (users)=> {
              dispatch(setUsersAC(users))
          },
      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Users) ;