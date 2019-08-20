import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { connect } from '../../Redux';
import SimpleUserAvatar from './SimpleUserAvatar';
import UserCard from './UserCard';
import { toggleUserCard } from './userActions';

const useStyles = makeStyles({
    root: {
        position: "relative",
    },
});

const UserAvatar = props => {
    const { className, state: { loggedIn, hasUserCardOpen, user: { name } }, toggleUserCard } = props;

    if (!loggedIn) {
        return false;
    }
    const classes = useStyles();

    const avatar = (
        <SimpleUserAvatar className={className} onClick={() => toggleUserCard()} />
    );

    const avatarWithTooltip = hasUserCardOpen ? false : (
        <Tooltip disableFocusListener title={name} placement="bottom-start">
            <div>
                {avatar}
            </div>
        </Tooltip>
    );

    return (
        <div className={classes.root}>
            {avatarWithTooltip || avatar}
            <UserCard />
        </div>
    );
};

UserAvatar.propTypes = {
    className: PropTypes.string,
};

UserAvatar.defaultProps = {

};

export default connect('user', { toggleUserCard }, UserAvatar);
