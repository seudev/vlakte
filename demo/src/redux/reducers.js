import { i18nReducer } from '@seudev/x-i18n';
import drawerReducer from '../../../src/components/drawer/drawerReducer';
import userReducer from '../../../src/components/user/userReducer';

export default {
    i18n: i18nReducer,
    drawer: drawerReducer,
    user: userReducer
};
