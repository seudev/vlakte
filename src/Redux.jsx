import React from 'react';

import { projectName } from './props';
import { bindActionCreators } from 'redux';
import { Provider, connect as reduxConnect } from 'react-redux';
import { configureStore as reduxConfigureStore, getDefaultMiddleware, createAction as reduxCreateAction } from 'redux-starter-kit';
import promise from 'redux-promise';
import multi from 'redux-multi';

export const configureStore = config => {
    return reduxConfigureStore({
        middleware: [...getDefaultMiddleware(), promise, multi],
        ...config,
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

export const createAction = (type, handler) => {
    const finalType = `${projectName}/${type}`;
    const action = reduxCreateAction(finalType);
    if (!handler) {
        return action;
    }

    const handlerWrapper = function() {
        return handler.apply(this, [action, ...arguments]);
    };
    handlerWrapper.toString = () => finalType;
    return handlerWrapper;
};

export default props => (
    <Provider store={props.store}>
        {props.children}
    </Provider>
);
