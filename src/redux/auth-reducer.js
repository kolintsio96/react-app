import {authAPI} from "../api";

const SET_AUTH_INFO = 'SET_AUTH_INFO';
let initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false
};

export let setAuthInfo = (userId, login, email, isAuth) => ({type: SET_AUTH_INFO, payload: {userId, login, email, isAuth}});
export let getAuthInfo = () => {
    return (dispatch) => {
        authAPI.getAuthData()
            .then(response => {
                if(response.resultCode === 0){
                    let {id, login, email} = response.data;
                    dispatch(setAuthInfo(id, login, email, true));
                }
            })
    }
};
export let login = (data) => {
    return (dispatch) => {
        authAPI.login(data)
            .then(response => {
                if (response.resultCode === 0){
                  dispatch(getAuthInfo());
                }
            })
    }
};
export let logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0){
                    dispatch(setAuthInfo(null, null, null, false));
                }
            })
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