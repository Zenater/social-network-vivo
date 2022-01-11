import React, {ChangeEvent} from 'react';
import s from './My posts.module.css';
import {Post, PostType} from "../Post/Post";
import {ActionsTypes, addPostAC, changeTextTypeAC} from "../../../../redux/store";

type MyPostsPropsType = {
    post: Array<PostType>
    message:string
    dispatch:(action: ActionsTypes)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.post.map(p => <Post message={p.message} likes={p.likes}/>)

    const addNewUser = () => {
        // props.addPostCallBack(props.message);
        props.dispatch(addPostAC(props.message))
        props.dispatch(changeTextTypeAC(""))
    }

    const newTextChangeHandler=(e: ChangeEvent<HTMLTextAreaElement> )=>{
        props.dispatch(changeTextTypeAC(e.currentTarget.value))
        // props.changeTextCallback(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea
                    value={props.message}
                    onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={addNewUser}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
