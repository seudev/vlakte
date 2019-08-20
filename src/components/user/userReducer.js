import { createReducer } from 'redux-starter-kit';

import { login, logout, toggleUserCard, closeUserCard } from './userActions';

const INITIAL_STATE = {
    loggedIn: false,
    hasUserCardOpen: false,
    user: {
        name: "",
        login: "",
        profileImageSrc: "",
        avatarVariant: "default",
    }
};

export default createReducer(INITIAL_STATE, {
    [login]: (state, action) => {
        const user = {
            ...action.payload,
        };
        if (user.name && (!user.abbreviation)) {
            user.abbreviation = user.name.substring(0, 1);
        }
        return { loggedIn: true, hasUserCardOpen: false, user };
    },
    [logout]: () => ({ ...INITIAL_STATE }),
    [toggleUserCard]: state => ({ ...state, hasUserCardOpen: !state.hasUserCardOpen }),
    [closeUserCard]: state => ({ ...state, hasUserCardOpen: false }),
});
