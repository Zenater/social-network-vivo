import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY': '0aa1f90a-e99e-4e45-9e93-66c9268a07a5'
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





