import { combineReducers } from 'redux';

import { i18nReducer } from '@seudev/x-i18n';

export default combineReducers({
    i18n: i18nReducer
});
