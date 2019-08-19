import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Message } from '@seudev/x-i18n';

import SimpleUserAvatar from './SimpleUserAvatar';
import { connect } from '../../Redux';
import { closeUserCard, logout } from './userActions';

const useStyles = makeStyles(theme => ({
    card: {
        position: "absolute",
        position: "absolute",
        right: 0,
        top: "calc(100% + 8px)",
    },
    cardHeader: {
        padding: "8px 16px",
    },
    cardActions: {
        paddingTop: 0
    },
    bigAvatar: {
        width: 96,
        height: 96,
    },
    myAccountButton: {
        marginTop: "8px",
    },
    logoutButton: {
        marginLeft: "auto",
    },
}));

const UserCard = props => {
    const { state: { hasUserCardOpen, user: { name, login } }, closeUserCard, logout } = props;
    const classes = useStyles();

    if (!hasUserCardOpen) {
        return false;
    }
    return (
        <ClickAwayListener onClickAway={() => closeUserCard()}>
            <Card className={classes.card} elevation={4}>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                        <SimpleUserAvatar className={classes.bigAvatar} />
                    }
                    title={name}
                    subheader={
                        <React.Fragment>
                            <div className={classes.login}>{login}</div>
                            <Button size="small" variant="contained" color="primary" className={classes.myAccountButton}>
                                <Message id="user.myAccount" />
                            </Button>
                        </React.Fragment>
                    }
                />
                <CardActions disableSpacing className={classes.cardActions}>
                    <Button size="small" className={classes.logoutButton} onClick={() => logout()}>
                        <Message id="user.logout" />
                    </Button>
                </CardActions>
            </Card>
        </ClickAwayListener>
    );
};

UserCard.propTypes = {
    name: PropTypes.string,
    nameLength: PropTypes.number,
    src: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "avatar",
        "orangeAvatar",
        "purpleAvatar"
    ])
};

UserCard.defaultProps = {
    nameLength: 1,
    variant: "avatar"
};

export default connect('user', { closeUserCard, logout }, UserCard);
