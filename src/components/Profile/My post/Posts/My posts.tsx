import React from 'react';
import s from './My posts.module.css';
import {Post} from "../Post/Post";
import {PostPropsType} from "../../../../index";




export const MyPosts = (props: PostPropsType ) => {


   const postsElement = props.posts.map(p=><Post message={p.message} likes={p.likes}/>)

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
                {postsElement}
            </div>
        </div>
    )
}
