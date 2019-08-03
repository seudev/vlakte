import React from 'react'
import ReactDOM from 'react-dom';

import Provider, { createStore } from '../../src/redux/Provider';
import reducers from './redux/reducers';
import App from './App';

export const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('demo'));
