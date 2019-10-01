import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';

import { Message } from '@seudev/x-i18n';

import { connect } from '../../../Redux';
import { closeNotificationList, clearNotifications } from './notificationActions';
import Notification from './Notification';

const useStyles = makeStyles(theme => ({
    card: {
        position: "absolute",
        top: "calc(100% + 8px)",
        right: 10,
        width: "calc(100vw - 20px)",
        maxWidth: 600
    },
    cardContent: {
        padding: 0,
        maxHeight: "50vh",
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            width: 6
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 4
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
    },
    cardEmpty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:last-child': {
            padding: 10,
        }
    },
    clearButton: {
        marginLeft: "auto",
    },
}));

const NotificationList = props => {
    const { state: { hasNotificationListOpen, notifications }, closeNotificationList, clearNotifications } = props;
    const classes = useStyles();

    if (!hasNotificationListOpen) {
        return false;
    }
    return (
        <ClickAwayListener onClickAway={() => closeNotificationList()}>
            <Card className={classes.card} elevation={4}>
                <CardContent className={notifications.length > 0 ? classes.cardContent : classes.cardEmpty}>
                    {notifications.map(({ id, title, description, image, route, link, actions }) => (
                        <Notification key={id} title={title} description={description} image={image} route={route} link={link} actions={actions} />
                    ))}
                    {notifications.length === 0 && (
                        <Typography component="p" color="textSecondary">
                            <Message id="notification.isEmpty" />
                        </Typography>
                    )}
                </CardContent>
                {notifications.length > 0 && (
                    <CardActions disableSpacing className={classes.cardActions}>
                        <Button size="small" className={classes.clearButton} onClick={() => clearNotifications()}>
                            <Message id="notification.clear" />
                        </Button>
                    </CardActions>
                )}
            </Card>
        </ClickAwayListener>
    );
};

NotificationList.propTypes = {

};

NotificationList.defaultProps = {

};

export default connect('notification', { closeNotificationList, clearNotifications }, NotificationList);
