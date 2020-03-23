export const getUsersData = state => {
    return state.usersPage.users;
};
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