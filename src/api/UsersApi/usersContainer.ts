import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users?',
    headers: {
        'API-KEY': '7bb2e83b-e2d3-4826-936e-3aa87ef57425'
    },
    withCredentials: true
})

export const usersContainerApi = {
    getPages(currentPage:number,pageSize:number) {
        return  instance.get<any>('page=${currentPage}&count=${pageSize}')
    },
    getPageNumber(pageNumber:number,pageSize:number) {
        return  instance.get<any>('page=${pageNumber}')
    }
}

