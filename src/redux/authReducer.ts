import {Dispatch} from "redux";
import {useEffect} from "react";
import {authApi} from "../api/HeaderApi/authApi";

type initialStateAuthType = {
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

export const authReducer = (state:initialStateAuthType = initialStateAuth, action: ActionsTypes):initialStateAuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null,) =>
    ({type: 'SET-USER-DATA', data: {userId, email, login}
}) as const


export type ActionsTypes = ReturnType<typeof setAuthUserData>


export const getAuthUserData = () => {
    return(dispatch: Dispatch) => {
        useEffect(() => {
            authApi.me().then(responce => {
                        if (responce.data.resultCode === 0) {
                            let {id, login, email} = responce.data.data;
                            dispatch(setAuthUserData(id, email, login))
                        }
                    }
                )
        }, [])
    }
}