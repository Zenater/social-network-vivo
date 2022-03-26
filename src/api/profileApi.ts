import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    headers: {
        'API-KEY': '0aa1f90a-e99e-4e45-9e93-66c9268a07a5'
    },
    withCredentials: true
})

export const profileApi = {
    getProfile(userId:number) {
        return  instance.get<any>(`${userId}`)
    },
    getStatus(userId:number) {
        return instance.get<any>(`status/` + `${userId}`)
    },
    updateStatus(status:string) {
        return instance.put<any>(`status/`,{status})
    },

}





