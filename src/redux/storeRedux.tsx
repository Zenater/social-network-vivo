import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer, UsersActionType} from "./userReducer";
import {AuthActionsTypes, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer, {AppReducerActionsTypes} from "./appReducer";
import {navBarPageReducer} from "./navBarPage-reducer";


const rootReducer = combineReducers({
    profileReducer,
    sidebarReducer,
    usersPage: userReducer,
    dialogsPage: dialogsReducer,
    auth:authReducer,
    form: formReducer,
    app: appReducer,
    navBarPage: navBarPageReducer,
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
//type of all Actions
export type AppActionType = ProfileActionsTypes | UsersActionType | AuthActionsTypes | AppReducerActionsTypes

// type all thunk
export type AppThunkType<ReturnType=void> =ThunkAction <ReturnType,AppRootStateType,unknown,AppActionType>

// @ts-ignore
window.store = store;

// export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppRootStateType, unknown, A>
