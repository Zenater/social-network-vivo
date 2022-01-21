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
import {StoreType} from "./redux/store";
import UsersContainer from "./components/Users/UsersContainer";
import {UsersType} from "./components/Users/Users";
import {AppRootStateType} from "./redux/storeRedux";

//
// type PropsType = {
//     store: StoreType
// }
// React.FC<PropsType>
export const App= (props:AppRootStateType) => {

    // const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*     <Settings/>*/}
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                                                 messages={state.dialogsPage.messages}
                                                                 // dispatch={props.store.dispatch.bind(props.store)}
                                                                 newMessageBody={state.dialogsPage.newMessageBody}/>}/>
                        <Route path='/profile' element={<Profile post={state.profilePage.post}
                                                                 message={state.profilePage.messageForNewPost}
                                                                 // dispatch={props.store.dispatch.bind(props.store)}
                         />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
