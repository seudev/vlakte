import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const NestedListItem = ({ initOpen, item, children }) => {
    const [isOpen, setOpen] = React.useState((initOpen === true));

    const toggleItem = event => {
        event.stopPropagation();
        setOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <ListItem button onClick={toggleItem}>
                {item}
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children}
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default NestedListItem;
