import {authAPI, securityAPI} from "../api";
import {stopSubmit} from "redux-form";

const SET_AUTH_INFO = '/auth/SET_AUTH_INFO';
const SET_CAPTCHA_URL = '/auth/SET_CAPTCHA_URL';
type SetAuthInfoPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
type SetAuthInfoType = {
    type: typeof SET_AUTH_INFO,
    payload: SetAuthInfoPayloadType
}
type SetCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL,
    payload: {captchaUrl: string | null}
}
export type InitialStateType = typeof initialState;

let initialState = {
    login: null as number | null,
    email: null as string | null,
    userId: null as number | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
};

export let setAuthInfo = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthInfoType => ( {
    type: SET_AUTH_INFO,
    payload: {userId, login, email, isAuth}
});
export let setCaptchaUrl = (captchaUrl: string | null): SetCaptchaUrlType => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}});
export let getAuthInfo = () => {
    return async (dispatch: any) => {
        let response = await authAPI.getAuthData();
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthInfo(id, login, email, true));
        }
    }
};
export let login = (data: object) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(data);
        if (response.resultCode === 0) {
            dispatch(getAuthInfo());
            dispatch(setCaptchaUrl(null));
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }else {
                dispatch(stopSubmit('login', {_error: response.messages}))
            }
        }
    }
};
export let logout = () => {
    return async (dispatch: any) => {
        let response = await authAPI.logout();
        if (response.resultCode === 0) {
            dispatch(setAuthInfo(null, null, null, false));
        }
    }
};
export let getCaptchaUrl = () => {
    return async (dispatch: any) => {
        let response = await securityAPI.getCaptchaUrl();
        dispatch(setCaptchaUrl(response.url));
    }
};
let authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_CAPTCHA_URL:
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

export default authReducer