import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Message } from '@seudev/x-i18n';
import CodeIcon from '@material-ui/icons/Code';
import Avatar from '@material-ui/core/Avatar';

import Drawer from '../../../src/components/drawer/Drawer';
import NestedListItem from '../../../src/components/list/NestedListItem';
import DrawerHeader from '../../../src/components/drawer/DrawerHeader';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default props => {
    const classes = useStyles();

    return (
        <Drawer>
            <DrawerHeader>
                <ListItem button onClick={(event) => event.stopPropagation()}>
                    <ListItemAvatar>
                        <Avatar>
                            <CodeIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <Message as={ListItemText} id="brand" />
                </ListItem>
            </DrawerHeader>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                <NestedListItem initOpen item={
                    <React.Fragment>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </React.Fragment>
                }>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                </NestedListItem>
            </List>
        </Drawer>
    );
};