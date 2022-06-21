import React from 'react';
import s from './Post.module.css';

export type PostType = {
    message: string
    likes: number
    id?: number
    image: string
}

export const Post =(props: PostType)=> {

    return (
        <div className={s.wrap}>
            <img className={s.img} src={props.image} />
            <div className={s.text}>{props.message}</div>
            <button className={s.like__btn}>&#10084;</button>
            <p className={s.like}>{props.likes}</p>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU'/>*/}
            {/*    {props.message}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <span> like</span> {props.likes}*/}
            {/*</div>*/}
        </div>

    )
}
