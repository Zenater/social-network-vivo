import {Dispatch} from "redux";
import {authAPI} from "../api/profileApi";
import {stopSubmit} from "redux-form";

export type initialStateAuthType = {
    userId: null
    email: null
    login: null
    isAuth: boolean
}

const initialStateAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type ActionsTypes = ReturnType<typeof setAuthUserData>

export const authReducer = (state: initialStateAuthType = initialStateAuth, action: ActionsTypes): initialStateAuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null, isAuth: boolean) =>
    ({
        type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}
    }) as const

export const getAuthUserData = (props: any) => async (dispatch: Dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {

    let res = await authAPI.login(email, password, rememberMe)

    if (res.data.resultCode === 0) {
        // @ts-ignore
        dispatch(getAuthUserData())
    } else {
        let messageError = res.data.messages.lenght > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messageError}))
    }

}
export const logout = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}


