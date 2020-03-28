import {createSelector} from "reselect";

const getUsersSelector = state => {
    return state.usersPage.users;
};
export const getUsersData = createSelector(getUsersSelector, (users) => {
    // https://www.npmjs.com/package/reselect
    // https://github.com/devSchacht/translations/blob/master/articles/reselect-selector-library-for-redux/readme.md
    // Library for difficult selectors
    return users;
});
export const paginationTotal = state => {
    return state.usersPage.pagination.total;
};
export const paginationCurrent = state => {
    return state.usersPage.pagination.current;
};
export const paginationLimit = state => {
    return state.usersPage.pagination.limit;
};
export const isFetching = state => {
    return state.usersPage.isFetching;
};
export const inProgressFollowing = state => {
    return state.usersPage.inProgressFollowing;
};