import {authAPI} from "../api";
import {stopSubmit} from "redux-form";

const SET_AUTH_INFO = '/auth/SET_AUTH_INFO';
let initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false
};

export let setAuthInfo = (userId, login, email, isAuth) => ({type: SET_AUTH_INFO, payload: {userId, login, email, isAuth}});
export let getAuthInfo = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuthData();
        if(response.resultCode === 0){
            let {id, login, email} = response.data;
            dispatch(setAuthInfo(id, login, email, true));
        }
    }
};
export let login = (data) => {
    return async (dispatch) => {
        let response = await authAPI.login(data);
        if (response.resultCode === 0){
            dispatch(getAuthInfo());
        }else{
            dispatch(stopSubmit('login', {_error: response.messages}))
        }
    }
};
export let logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.resultCode === 0){
            dispatch(setAuthInfo(null, null, null, false));
        }
    }
};
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
};

export default authReducer;