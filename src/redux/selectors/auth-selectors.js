export const getUserId = state => {
    return state.auth.userId;
};
export const isAuth = state => {
    return state.auth.isAuth;
};
export const getCaptcha = state => {
    return state.auth.captchaUrl;
};
export const userEmail = state => {
    return state.auth.email;
};
export const userLogin = state => {
    return state.auth.login;
};