import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderTree} from "./render";
import {RootStateType, store, StoreType} from './redux/store';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

export let  renderEntireTree = (state: StoreType) => {
    ReactDOM.render(<BrowserRouter>
            <Provider store={store}>
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById("root"))
}

renderEntireTree(store.getState());

store.subscribe(()=> {
    let state=store.getState();
    renderEntireTree(state)
})


// renderEntireTree()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// function renderEntireTree(arg0: RootStateType) {
//     throw new Error('Function not implemented.');
// }
