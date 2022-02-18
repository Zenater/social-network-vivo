import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY': 'fb2ab079-08d1-443f-b919-56e507e1bcd7'
    },
    withCredentials: true
})

export const usersApi = {
    unfollow(id:number) {
        return  instance.delete<any>('${id}')
    },
    follow(id:number) {
        return instance.post<any>('${id}',{})
    }
}

