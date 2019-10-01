import { i18nReducer } from '@seudev/x-i18n';
import drawerReducer from '../../../src/components/drawer/drawerReducer';
import userReducer from '../../../src/components/user/userReducer';
import notificationReducer from '../../../src/components/app-bar/notification/notificationReducer';

export default {
    i18n: i18nReducer,
    drawer: drawerReducer,
    user: userReducer,
    notification: notificationReducer
};
