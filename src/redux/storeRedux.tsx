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

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
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
// непосредственно создаём store
export const store = createStore(rootReducer,applyMiddleware(thunk));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
//type of all Actions
export type AppActionType = ProfileActionsTypes | UsersActionType | AuthActionsTypes | AppReducerActionsTypes

// type all thunk
export type AppThunkType<ReturnType=void> =ThunkAction <ReturnType,AppRootStateType,unknown,AppActionType>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

// export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppRootStateType, unknown, A>
