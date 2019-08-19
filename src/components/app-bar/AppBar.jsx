import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { default as MuiAppBar } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
}));

const AppBar = props => {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <MuiAppBar position="fixed">
                <Toolbar>
                    {children}
                </Toolbar>
            </MuiAppBar>
            <Toolbar />
        </div>
    );
};

AppBar.propTypes = {
    
};

AppBar.defaultProps = {

};

export default AppBar;
