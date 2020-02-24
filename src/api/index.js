import * as axios from "axios";
let instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers:{
        'API-KEY': '32095882-97ef-40ca-9d97-61b1e6a6cf7f'
    }
})
export const usersAPI = {
    getUsersData(page, count){
        return instanse.get(`/users?page=${page}&count=${count}`)
            .then(response => response.data);
    },
    followUser(userId){
        return instanse.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId){
        return instanse.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
};
export const profileAPI = {
    getProfileData(userId){
        return instanse.get(`/profile/${userId}`)
            .then(response => response.data)
    }

};
export const authAPI = {
    getAuthData(){
        return instanse.get(`/auth/me`)
            .then(response => response.data)
    }

};