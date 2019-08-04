import React from 'react'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import Provider, { configureStore } from '../../src/Redux';
import reducers from './redux/reducers';
import App from './App';

export const store = configureStore({
    reducer: reducers
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('demo'));
