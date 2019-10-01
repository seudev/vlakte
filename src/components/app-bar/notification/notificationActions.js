import { createAction } from '../../../Redux';

export const addNotification = createAction("notification/add");
export const removeNotification = createAction("notification/remove");
export const clearNotifications = createAction("notification/clear");
export const toggleNotificationList = createAction("notification/toggleNotificationList");
export const closeNotificationList = createAction("notification/closeNotificationList");

export default {
    addNotification,
    removeNotification,
    clearNotifications,
    toggleNotificationList,
    closeNotificationList,
};
