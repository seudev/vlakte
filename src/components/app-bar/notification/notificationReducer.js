import { createReducer } from 'redux-starter-kit';

import {
    addNotification,
    removeNotification,
    clearNotifications,
    toggleNotificationList,
    closeNotificationList,
} from './notificationActions';

const INITIAL_STATE = {
    hasNotificationListOpen: false,
    notifications: [1, 2, 3, 4, 5, 6, 7].map(i => ({
        id: i,
        title: "Lizard",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        image: { src: "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=72&w=72", alt: "alt test" },
        route: `/route${i % 2 === 0 ? 1 : 2}`,
        actions: {
            "share": true,
            "learnMore": true,
        }
    }))
};

export default createReducer(INITIAL_STATE, {
    [addNotification]: (state, action) => ({ ...state, notifications: [{ ...action.payload }, ...state.notifications] }),
    [removeNotification]: (state, action) => ({ ...state, notifications: state.notifications.find(n => n.id != action.payload) }),
    [clearNotifications]: (state, action) => ({ ...state, notifications: [] }),
    [toggleNotificationList]: state => ({ ...state, hasNotificationListOpen: !state.hasNotificationListOpen }),
    [closeNotificationList]: state => ({ ...state, hasNotificationListOpen: false }),
});
