import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0aa1f90a-e99e-4e45-9e93-66c9268a07a5'
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
        return instance.put<any>(`profile/status/`,{status})
    },
    savePhoto ( photoFile:any) {
        const formData= new FormData();
        formData.append('image',photoFile)
        return instance.put('profile/photo',formData, {
            headers: {
                'Content-type':'multipart/form-data'
            }
        })
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






