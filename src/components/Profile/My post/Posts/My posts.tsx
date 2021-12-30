import React from 'react';
import s from './My posts.module.css';
import {Post} from "../Post/Post";
import {ProfilePageType} from "../../Profile";


export const MyPosts = (props: ProfilePageType) => {


    const postsElement = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewUser = () => {
        if(newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addNewUser}>Add posts</button>
                </div>
            </div>
            <div className={s.c}>
                {postsElement}
            </div>
        </div>
    )
}
