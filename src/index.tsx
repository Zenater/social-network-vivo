import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./redux/state";

export type ObjPropsType = {
    id: number
    message: string
    likes: number
}

export type AppPropsType = {
    posts: ObjPropsType[]
}

export type PostPropsType = {
    posts: ObjPropsType[]
}

export type DialogItemPropsType = {
    name: string
    id: number
}


export type MessageS = {
    id: number
    message: string
}

/*posts={posts} dialogs={dialogs} messages={messages}*/

ReactDOM.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();