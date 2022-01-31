import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";
import ProfileContainer from "./components/Profile/ProfileContainer";


export const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={<DialogContainer/>}/>
                        <Route path='/profile/:userID?' element={<ProfileContainer />}/>
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
