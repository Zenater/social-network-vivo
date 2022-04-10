import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {DialogContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/LoginForm";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {AppRootStateType} from "./redux/storeRedux";
import Preloader from "./common/Preloader/Preloader";

type MapStateToPropsApp = {
    initialized: boolean
}
export type AppClType = MapStateToPropsApp & MapDispatchToPropsApp;
// & MapDispatchToPropsType
export type MapDispatchToPropsApp = {
    initializeApp: () =>void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsApp  => ({
    initialized: state.app.initialized
})
export class App extends React.Component<AppClType, {}> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
  /*      if(this.props.initialized) {
            return <Preloader/>
        }*/
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/dialogs' element={<DialogContainer/>}/>
                        <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default compose(connect(mapStateToProps, {initializeApp})(App));

