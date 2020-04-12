import {usersAPI} from "../api";
import {updateObjInArray} from "../utils/helpers";

const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_USER = '/users/SET_USER';
const SET_ACTIVE_PAGINATION = '/users/SET_ACTIVE_PAGINATION';
const SET_TOTAL_PAGINATION = '/users/SET_TOTAL_PAGINATION';
const TOGGLE_IS_FETCHING = '/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING = '/users/TOGGLE_FOLLOWING';


export let follow = (userId) => ({type: FOLLOW, id:userId});
export let unfollow = (userId) => ({type: UNFOLLOW, id: userId});
export let setUsers = (users) => ({type: SET_USER, users: users});
export let setActivePagination = (page) => ({type: SET_ACTIVE_PAGINATION, page: page});
export let setTotalPagination = (total) => ({type: SET_TOTAL_PAGINATION, total: total});
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export let toggleFollowing = (isFetching, id) => ({type: TOGGLE_FOLLOWING, isFetching, id});

export let getUsers = (page, limit) => {
    return async (dispatch) => {
        dispatch(setActivePagination(page));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsersData(page, limit);
        dispatch(setUsers(data.items));
        dispatch(setTotalPagination(data.totalCount));
        dispatch(toggleIsFetching(false));
    }
};
export let followingUser = (userId, followed) => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        let promise = !followed ? usersAPI.followUser(userId) : usersAPI.unfollowUser(userId)
        let response = await promise;
        dispatch(toggleFollowing(false, userId));
        response.resultCode === 0 && !followed ? dispatch(follow(userId)) : dispatch(unfollow(userId));
    }
};

let initialState = {
    users: [],
    pagination:{
        total:0,
        current:1,
        limit: 10
    },
    isFetching: false,
    inProgressFollowing: [],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: updateObjInArray(state.users, action.id, 'id', {followed: true}),
            };
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: updateObjInArray(state.users, action.id, 'id', {followed: false}),
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
        case TOGGLE_FOLLOWING:{
            return {
                ...state,
                inProgressFollowing: action.isFetching
                    ? [...state.inProgressFollowing, action.id]
                    : [state.inProgressFollowing.filter(id => {return id !== action.id})]
            }
        }
        default: {
            return {...state}
        }
    }
}

export default usersReducer;