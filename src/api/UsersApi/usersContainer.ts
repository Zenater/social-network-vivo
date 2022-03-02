import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users?',
    headers: {
        'API-KEY': '51bb63fa-2e05-4617-888c-e9df6d522090'
    },
    withCredentials: true
})

export const usersContainerApi = {
    getPages (currentPage:number,pageSize:number) {
        return  instance.get<any>(`page=${currentPage}&count=${pageSize}`)
    },
    getPageNumber (pageNumber:number,pageSize:number) {
        return  instance.get<any>(`page=${pageNumber}&count=${pageSize}`)
    }
}

