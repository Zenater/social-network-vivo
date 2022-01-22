import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {AppRootStateType, store} from "./redux/storeRedux";


ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root"))


