import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '214a73ed-48b9-448e-951f-3a7527ae0225'
    },
    withCredentials: true
})

export const profileApi = {
    getProfile(userId:number) {
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put(`profile/status/`,{status})
    },

}





