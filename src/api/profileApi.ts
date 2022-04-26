import axios from "axios";
import {ProfileType} from "../components/Profile/ProfileInfo/ProfileDataForm";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ae9be29f-9824-430e-befd-64adb3e987e3'
    },
    withCredentials: true
})

export const profileApi = {
    getProfile(userId:number) {
        return  instance.get<any>(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get<any>(`profile/status/${userId}`)
    },
    updateStatus(status:string) {
        return instance.put<any>(`profile/status`,{status}).then(res => {
            return res.data
        })
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
        return instance.put(`profile`, profile );
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string,password: string,rememberMe=false,captcha=true) {
        return instance.post(`auth/login`, {email,password,rememberMe,captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}






