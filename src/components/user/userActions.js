import { createAction } from '../../Redux';

export const login = createAction("user/login");
export const logout = createAction("user/logout");
export const toggleUserCard = createAction("user/toggleUserCard");
export const closeUserCard = createAction("user/closeUserCard");


export default {
    login,
    logout,
    toggleUserCard,
    closeUserCard,
};
