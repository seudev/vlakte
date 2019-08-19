import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Message } from '@seudev/x-i18n';

const useStyles = makeStyles(theme => ({
    brand: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Brand = props => {
    const { id, name, children } = props;
    const classes = useStyles();
    if (id || name) {
        return (
            <Typography className={classes.brand} variant="h6" noWrap>
                <Message id={id} default={name} />
            </Typography>
        );
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

Brand.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
};

Brand.defaultProps = {

};

export default Brand;
