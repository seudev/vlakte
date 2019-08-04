import { createAction } from '../../Redux';

export const open = createAction("drawer/open");
export const close = createAction("drawer/close", (close, event) => dispatch => {
    if (!(event && (event.type === 'keydown') && (event.key === 'Tab' || event.key === 'Shift'))) {
        dispatch(close());
    }
});

export default {
    open,
    close,
};
