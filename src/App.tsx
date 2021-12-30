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

import {addPost, RootStateType, state} from "./redux/state";




export const App =(props: RootStateType)=> {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*     <Settings/>*/}

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.dialogsPage.dialogs} messages={props.dialogsPage.messages} />}/>
                        <Route path='/profile' element={<Profile  posts={props.profilePage.posts} addPostCallBack={addPost} />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
