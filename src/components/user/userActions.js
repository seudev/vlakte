import { createAction } from '../../Redux';

export const login = createAction("user/login");
export const logout = createAction("user/logout");
export const openUserCard = createAction("user/openUserCard");
export const closeUserCard = createAction("user/closeUserCard");


export default {
    login,
    logout,
    openUserCard,
    closeUserCard,
};
