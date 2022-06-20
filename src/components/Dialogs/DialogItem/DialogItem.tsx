import React from 'react';
import {NavLink} from "react-router-dom";
import dialogs from './DialogItem.module.css';

type DialogItemPropsType = {
    name: string
    id: string
    image:string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <li className={`${dialogs.dialog__item} ${dialogs.active}`}>
                <img src={props.image} alt={'ava'} className={dialogs.img}/>
                <NavLink to={path} className={dialogs.link}>{props.name}</NavLink>
            </li>
            {/*<NavLink to={path}>{props.name}</NavLink>*/}
        </div>
    )
}
