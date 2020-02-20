const SET_AUTH_INFO = 'SET_AUTH_INFO';
let initialState = {
  login: null,
  email: null,
  id: null,
  isAuth: false
};

export let setAuthInfo = (authData) => ({type: SET_AUTH_INFO, data: authData});
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO: {
            console.log(action.data)
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