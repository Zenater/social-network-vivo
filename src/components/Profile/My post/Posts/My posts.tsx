import React from 'react';
import s from './My posts.module.css';
import {Post} from "../Post/Post";

type ObfPropsType = {
    id: number
    message: string
    likes: number
}

export type PostPropsType = {
    posts: ObfPropsType[]
}

export const MyPosts = ( ) => {

    const posts = [
        {id: 1, message: "hi, how are you?", likes: 12},
        {id: 2, message: "It my fist posts", likes: 11}
    ]

   const postsElement = posts.map(p=><Post message={p.message} likes={p.likes}/>)

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
