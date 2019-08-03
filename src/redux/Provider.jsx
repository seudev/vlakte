import React from 'react';

import { applyMiddleware, createStore as reduxCreateStore, bindActionCreators } from 'redux'
import { Provider, connect as reduxConnect } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const createStore = reducers => applyMiddleware(thunk, multi, promise)(reduxCreateStore)(reducers, devTools);

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
