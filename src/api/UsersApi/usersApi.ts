import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY': '51bb63fa-2e05-4617-888c-e9df6d522090'
    },
    withCredentials: true
})

export const usersApi = {
    unfollow(id:number) {
        return  instance.delete<any>(`${id}`)
    },
    follow(id:number) {
        return instance.post<any>(`${id}`)
    }

}





