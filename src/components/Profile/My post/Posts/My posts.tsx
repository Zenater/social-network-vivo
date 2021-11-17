import React from 'react';
import s from './My posts.module.css';
import {Post} from "../Post/Post";


export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
             <div>
                 <button>Add posts</button>
             </div>

            </div>
            <div className={s.c}>
                <Post message="hi, how are you?"></Post>
                <Post message="It's my fist posts"/>
            </div>
        </div>
    )
}
