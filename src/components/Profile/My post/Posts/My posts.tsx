import React, {ChangeEvent} from 'react';
import s from './My posts.module.css';
import {Post, PostType} from "../Post/Post";

type MyPostsPropsType = {
    post: Array<PostType>
    addPostCallBack: (postText:string)=>void
    message:string
    changeTextCallback: (newText:string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.post.map(p => <Post message={p.message} likes={p.likes}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewUser = () => {
        // if(newPostElement.current) {
        //     props.addPostCallBack(newPostElement.current.value)
        props.addPostCallBack(props.message);
        props.changeTextCallback("")
    }

    const newTextChangeHandler=(e: ChangeEvent<HTMLTextAreaElement> )=>{
        props.changeTextCallback(e.currentTarget.value)
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
