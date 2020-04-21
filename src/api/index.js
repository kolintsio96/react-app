import * as axios from "axios";
let instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers:{
        'API-KEY': 'caa3113d-ed1c-441a-8936-bf51c84925b7'
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
    },
    setUserStatus(status){
        return instanse.put(`/profile/status`, {status})
            .then(response => response.data)
    },
    getUserStatus(userId){
        return instanse.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    setProfilePhoto(photoFile){
        let formData = new FormData();
        formData.append('image', photoFile)
        return instanse.put(`/profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
            .then(response => response.data)
    }

};
export const authAPI = {
    getAuthData(){
        return instanse.get(`/auth/me`)
            .then(response => response.data)
    },
    login(data){
        return instanse.post(`/auth/login`, data)
            .then(response => response.data)
    },
    logout(data){
        return instanse.delete(`/auth/login`)
            .then(response => response.data)
    },

};