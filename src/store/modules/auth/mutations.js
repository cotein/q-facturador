export const DO_LOGIN = (state, user) => {
    state.auth = true;
    state.user = user;
}

export const DO_LOGOUT = (state) => {
    state.auth = false;
    state.user = null;
}