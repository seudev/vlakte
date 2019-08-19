import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
}));

const Grow = props => {
    const { children } = props;
    const classes = useStyles();

    return (
        <span className={classes.grow}></span>
    );
};

Grow.propTypes = {
    
};

Grow.defaultProps = {

};

export default Grow;
