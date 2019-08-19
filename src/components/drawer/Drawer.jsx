import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { connect } from '../../Redux';
import actions from './drawerActions';

const useStyles = makeStyles({
    drawer: {
        width: 250
    }
});

const Drawer = props => {
    const { initOpen, open, close, variant, children } = props;
    const classes = useStyles();

    if (initOpen) {
        React.useEffect(() => { open() }, [initOpen]);
    }
    return (
        <SwipeableDrawer
            open={props.state.isOpen}
            onClose={() => close()}
            onOpen={() => open()}
            variant={variant}
        >
            <div
                className={classes.drawer}
                role="presentation"
                onClick={() => close()}
                onKeyDown={() => close()}
            >
                {children}
            </div>
        </SwipeableDrawer >
    );
};

Drawer.propTypes = {
    initOpen: PropTypes.bool,
    variant: PropTypes.oneOf([
        'permanent',
        'persistent',
        'temporary'
    ])
};

Drawer.defaultProps = {

};

export default connect('drawer', actions, Drawer);
