import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {MyPosts} from "./My posts";
import {addPostAC} from "../../../../redux/profileReducer";
import {AppRootStateType} from "../../../../redux/storeRedux";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profileReducer.post,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText:string) => dispatch(addPostAC(newPostText))
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

