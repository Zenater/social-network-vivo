import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state} from "./redux/state";
import {RootStateType} from "./redux/state";



/*posts={posts} dialogs={dialogs} messages={messages}*/

ReactDOM.render(
    <React.StrictMode>
<App profilePage={state.profilePage} dialogsPage={state.dialogsPage} addPostCallback={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();