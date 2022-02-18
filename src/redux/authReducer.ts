import {Dispatch} from "redux";
import {useEffect} from "react";
import axios from "axios";

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
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: null, email: null, login: null,) =>
    ({type: 'SET-USER-DATA', data: {userId, email, login}
}) as const


export type ActionsTypes = ReturnType<typeof setAuthUserData>


export const getLoginTC = () => {

    return (dispatch: Dispatch) => {
        useEffect(() => {
            authApi.me()
                .then(res => {
                        if (res.data.resultCode === 0) {
                            let {id, login, email} = res.data.data;
                            dispatch(setAuthUserData(id, email, login))
                        }
                    }
                )
        }, [])
    }
}

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    headers: {
        'API-KEY': 'fb2ab079-08d1-443f-b919-56e507e1bcd7'
    },
    withCredentials: true
})

export const authApi = {
    me() {
        return instance.get<any>('me')
    },

}