import {Dispatch} from "redux";
import {authAPI} from "../api/profileApi";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./authReducer";

export type initialStateAppType = {
    initialized: boolean
}

const initialStateApp = {
    initialized: false
}

export type ActionsTypes = ReturnType<typeof initializeSucces>

export const appReducer = (state:initialStateAppType = initialStateApp, action: ActionsTypes):initialStateAppType => {
    switch (action.type) {
        case 'SET-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeSucces = () => ({type: 'SET-SUCCESS'}) as const

export const initializeApp = () => (dispatch: Dispatch)=> {
    // @ts-ignore
    let pr=dispatch(getAuthUserData())
    Promise.all([pr])
        .then(()=> {
            dispatch(initializeSucces())
        })
}

export default appReducer;
