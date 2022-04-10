import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY': '7033dea1-0869-4acf-9d67-9fc0079eedb9'
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





