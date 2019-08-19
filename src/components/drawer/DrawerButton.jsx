import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { connect } from '../../Redux';
import { open } from './drawerActions';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

const DrawerButton = ({ open }) => {
    const classes = useStyles();
    return (
        <IconButton
            onClick={() => open()}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
        >
            <MenuIcon />
        </IconButton>
    );
};

export default connect('drawer', { open }, DrawerButton);
