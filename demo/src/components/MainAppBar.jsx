import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DrawerButton from '../../../src/components/drawer/DrawerButton';
import AppBar from '../../../src/components/app-bar/AppBar';
import Brand from '../../../src/components/app-bar/Brand';
import SearchBar from '../../../src/components/app-bar/SearchBar';
import UserAvatar from '../../../src/components/user/UserAvatar';
import Grow from '../../../src/components/helpers/Grow';
import NotificationButton from '../../../src/components/app-bar/notification/NotificationButton';


export default props => {
    const [value, setValue] = React.useState("");

    return (
        <AppBar>
            <DrawerButton />
            <Brand id="brand" />
            <SearchBar value={value} onChange={event => {
                console.log(value);
                setValue(event.target.value);
            }} onEnter={event => console.log("ENTER=" + event.target.value)}/>
            <Grow/>
            <NotificationButton/>
            <UserAvatar />
        </AppBar>
    );
};
