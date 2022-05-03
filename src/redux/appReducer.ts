import {getAuthUserData} from "./authReducer";
import {AppThunkType} from "./storeRedux";

export type initialStateAppType = typeof initialStateApp;


const initialStateApp = {
    initialized: false,
    globalError: null
}

export type AppReducerActionsTypes = ReturnType<typeof initializeSucces>

export const appReducer = (state:initialStateAppType = initialStateApp, action: AppReducerActionsTypes):initialStateAppType => {
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

export const initializeApp = ():AppThunkType => dispatch => {
    let pr=dispatch(getAuthUserData())
    Promise.all([pr])
        .then(()=> {
            dispatch(initializeSucces())
        })
}

export default appReducer;
