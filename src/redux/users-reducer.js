const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_ACTIVE_PAGINATION = 'SET_ACTIVE_PAGINATION';
const SET_TOTAL_PAGINATION = 'SET_TOTAL_PAGINATION';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


export let follow = (userId) => ({type: FOLLOW, id:userId});
export let unfollow = (userId) => ({type: UNFOLLOW, id: userId});
export let setUsers = (users) => ({type: SET_USER, users: users});
export let setActivePagination = (page) => ({type: SET_ACTIVE_PAGINATION, page: page});
export let setTotalPagination = (total) => ({type: SET_TOTAL_PAGINATION, total: total});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

let initialState = {
    users: [],
    pagination:{
        total:0,
        current:1,
        limit: 100
    },
    isFetching: false
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id){
                        return{
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            };
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.id){
                        return{
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            };
        }
        case SET_USER: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_ACTIVE_PAGINATION: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    current: action.page
                }
            }
        }
        case SET_TOTAL_PAGINATION: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    total: action.total
                }
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default: {
            return {...state}
        }
    }
}

export default usersReducer;