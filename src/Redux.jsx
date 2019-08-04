import React from 'react';

import { projectName } from './props';
import { bindActionCreators } from 'redux';
import { Provider, connect as reduxConnect } from 'react-redux';
import { configureStore as reduxConfigureStore, getDefaultMiddleware, createAction as reduxCreateAction } from 'redux-starter-kit';
import promise from 'redux-promise';
import multi from 'redux-multi';
import { i18nReducer } from '@seudev/x-i18n';
import drawerReducer from './components/drawer/drawerReducer';

export const builtInReducers = {
    i18n: i18nReducer,
    drawer: drawerReducer
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

export const createAction = type => reduxCreateAction(`${projectName}/${type}`);

export default props => (
    <Provider store={props.store}>
        {props.children}
    </Provider>
);
