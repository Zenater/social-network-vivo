import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY': '51bb63fa-2e05-4617-888c-e9df6d522090'
    },
    withCredentials: true
})

export const profileApi = {
    getProfile(userId:number) {
        return  instance.get<any>(`profile/` + userId)
    },
    getStatus(userId:number) {
        return instance.get<any>(`status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put(`status`,{status: status})
    }

}





