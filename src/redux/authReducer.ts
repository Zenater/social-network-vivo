import {authAPI, LoginParamsType, securityAPI} from "../api/profileApi";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./storeRedux";


export type initialStateAuthType = typeof initialStateAuth;

const initialStateAuth = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>| ReturnType<typeof getCaptchaUrlSuccess>

export const authReducer = (state: initialStateAuthType = initialStateAuth, action: AuthActionsTypes): initialStateAuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null, isAuth: boolean) => ({
    type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}}) as const

export const getCaptchaUrlSuccess = (captchaUrl:string) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl} as const});

export const getAuthUserData = ():AppThunkType => async dispatch => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (data: LoginParamsType):AppThunkType => async dispatch => {
    let res = await authAPI.login(data)
    if (res.data.resultCode === 0) {
        await dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === 10) {
            await dispatch(getCaptchaUrl());
        }
        let messageError = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}

export const logout = ():AppThunkType => async dispatch => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = ():AppThunkType => async dispatch=> {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}





