import React from 'react';

import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const DrawerHeader = ({ raw, children }) => {
    return (
        <React.Fragment>
            {raw ? children : (
                <List>
                    {children}
                </List>
            )}
            <Divider />
        </React.Fragment>
    );
};

DrawerHeader.propTypes = {
    raw: PropTypes.bool
};

DrawerHeader.defaultProps = {
    raw: false
};

export default DrawerHeader;
