import { createReducer } from 'redux-starter-kit';

import { open, close } from './drawerActions';

const INITIAL_STATE = {
    isOpen: false
};

export default createReducer(INITIAL_STATE, {
    [open]: () => ({ isOpen: true }),
    [close]: () => ({ isOpen: false })
});
