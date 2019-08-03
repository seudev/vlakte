import React from 'react';

import { bindActionCreators } from 'redux';
import { Provider, connect as reduxConnect } from 'react-redux';
import { configureStore as reduxConfigureStore, getDefaultMiddleware } from 'redux-starter-kit';
import { i18nReducer } from '@seudev/x-i18n';
import promise from 'redux-promise';
import multi from 'redux-multi';

export const builtInReducers = {
    i18n: i18nReducer,
};

export const configureStore = config => {
    return reduxConfigureStore({
        ...config,
        reducer: {
            ...builtInReducers,
            ...config.reducer
        },
        middleware: [...getDefaultMiddleware(), promise, multi],
    });
};

export const connect = (stateKey, actions, component) => {
    const mapStateToProps = state => {
        const props = {
            state: {}
        };
        if (stateKey instanceof Array) {
            stateKey.forEach(key => props.state[key] = state[key]);
        } else {
            props.state = state[stateKey];
        }
        return props;
    };
    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
    return reduxConnect(mapStateToProps, mapDispatchToProps)(component);
};

export default props => (
    <Provider store={props.store}>
        {props.children}
    </Provider>
);
