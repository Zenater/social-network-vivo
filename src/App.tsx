import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";


export const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*     <Settings/>*/}
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={<DialogContainer/>}/>
                        {/*<Route path='/profile' element={<Profile post={props.profileReducer.post}*/}
                        {/*                                         message={props.profileReducer.messageForNewPost}*/}
                        {/*    // dispatch={props.store.dispatch.bind(props.store)}*/}
                        {/*/>}/>*/}
                        <Route path='/news' element={<News/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}


export default App;
