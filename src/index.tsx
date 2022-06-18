import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import  {AppContainer} from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/storeRedux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)


