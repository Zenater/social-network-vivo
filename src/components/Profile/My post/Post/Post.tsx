import React from 'react';
import s from './Post.module.css';


export type PostType = {
    message: string
    likes: number
    id?: number
}

export const Post =(props: PostType)=> {

    return (
        <div className={s.item}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU'/>
                {props.message}
            </div>
            <div>
                <span> like</span> {props.likes}
            </div>
        </div>

    )
}
