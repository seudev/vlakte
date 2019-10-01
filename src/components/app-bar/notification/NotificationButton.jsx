import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { connect } from '../../../Redux';
import { toggleNotificationList } from './notificationActions';
import NotificationList from './NotificationList';

const useStyles = makeStyles({
    button: {
        margin: 10,
    }
});

const NotificationButton = props => {
    const { state: { notifications: { length } }, toggleNotificationList } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <IconButton aria-label={`show ${length} new notifications`} color="inherit" className={classes.button} onClick={() => toggleNotificationList()}>
                <Badge badgeContent={length} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <NotificationList />
        </React.Fragment>
    );
};

NotificationButton.propTypes = {

};

NotificationButton.defaultProps = {

};

export default connect('notification', { toggleNotificationList: toggleNotificationList }, NotificationButton);
