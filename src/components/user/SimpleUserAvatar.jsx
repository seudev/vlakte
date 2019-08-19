import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import { connect } from '../../Redux';

const useStyles = makeStyles({
    default: {
        margin: 10,
    },
    orange: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    purple: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
    pointer: {
        cursor: "pointer",
    }
});

const SimpleUserAvatar = props => {
    const { className, onClick, state: { user: { abbreviation, profileImageSrc, avatarVariant } } } = props;
    const classes = useStyles();
    const classNames = `${classes[avatarVariant]} ${onClick ? classes.pointer : ''} ${className || ''}`;

    return (profileImageSrc ? (
        <Avatar alt={abbreviation} src={profileImageSrc} className={classNames} onClick={onClick} />
    ) : (
            <Avatar className={classNames} onClick={onClick}>{abbreviation}</Avatar>
        )
    );
};

SimpleUserAvatar.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

SimpleUserAvatar.defaultProps = {

};

export default connect('user', {}, SimpleUserAvatar);
