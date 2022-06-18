import axios, { AxiosResponse } from "axios";
import {ProfileType} from "../components/Profile/ProfileInfo/ProfileDataForm";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'da18ad3d-33e5-4c2b-a1fb-df29c881a332'
    },
    withCredentials: true
})

export const profileApi = {
    getProfile(userId:number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status:string) {
        return instance.put<{status: string},AxiosResponse<ResponseType>>(`profile/status`,{status})
    },
    savePhoto ( photoFile:File) {
        const formData= new FormData();
        formData.append('image',photoFile)
        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-type':'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileType) {
        return instance.put<{profile:ProfileType},AxiosResponse<ResponseType>>(`profile`, profile );
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(data:LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId: number}>>>(`auth/login`, data)
    },
    logout() {
        return instance.delete<ResponseType>(`/auth/login`);
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}
export type MeResponceType = {
    id: number | null
    email:string | null
    login: string | null
}
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}





