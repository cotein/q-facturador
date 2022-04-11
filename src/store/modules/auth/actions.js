import AuthService from "../../../services/AuthService";

export const doLogin = ({commit}, user) => {
    commit('DO_LOGIN', user);
}

export const doLogout = ({commit}) => {
    commit('DO_LOGOUT');
}

export const login = (_, payload) => {

    try {
        return AuthService.login(payload);
    } catch (error) {
        throw error;
    }
}

