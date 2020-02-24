import {authAPI} from "../api";

const SET_AUTH_INFO = 'SET_AUTH_INFO';
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
                dispatch(setAuthInfo(response.data));
            })
    }
}
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
};

export default authReducer;