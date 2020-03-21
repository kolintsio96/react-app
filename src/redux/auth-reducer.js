import {authAPI} from "../api";

const SET_AUTH_INFO = 'SET_AUTH_INFO';
const POST_LOGIN = 'POST_LOGIN';
let initialState = {
  login: null,
  email: null,
  id: null,
  isAuth: false
};

export let setAuthInfo = (authData) => ({type: SET_AUTH_INFO, data: authData});
export let getAuthInfo = () => {
    return (dispatch) => {
        authAPI.getAuthData()
            .then(response => {
                dispatch(setAuthInfo(response));
            })
    }
};
export let postLogin = (data) => {
    return (dispatch) => {
        authAPI.postLogin(data)
            .then(response => {
                dispatch(setAuthInfo(response));
            })
    }
};
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return {
                ...state,
                ...action.data.data,
                isAuth: action.data.resultCode === 0
            }
        }
        case POST_LOGIN: {
            return {
                ...state,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
};

export default authReducer;