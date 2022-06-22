import axios, {AxiosResponse} from 'axios'
import {UsersType} from "../../redux/userReducer";
import {ResponseType} from "../profileApi";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '6d59b228-89cd-4bce-bacb-27157b2efcfe'
    },
    withCredentials: true
})

export const usersApi = {
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post<{ userId: string }, AxiosResponse<ResponseType>>(`follow/${userId}`)
    },
    getPages(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<ResponseUsersPages>(`users?page=${currentPage}&count=${pageSize}`)
    },
    getPageNumber(pageNumber: number, pageSize: number) {
        return instance.get<{items: Array<UsersType>}>(`users?page=${pageNumber}&count=${pageSize}`)
    },
}

export type ResponseUsersPages = {
    items: Array<UsersType>
    totalCount: number
    error?: string | null
}







