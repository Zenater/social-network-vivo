import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users?',
    headers: {
        'API-KEY': '0aa1f90a-e99e-4e45-9e93-66c9268a07a5'
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

