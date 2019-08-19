import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DrawerButton from '../../../src/components/drawer/DrawerButton';
import AppBar from '../../../src/components/app-bar/AppBar';
import Brand from '../../../src/components/app-bar/Brand';
import SearchBar from '../../../src/components/app-bar/SearchBar';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default props => {
    const classes = useStyles();
    const [value, setValue] = React.useState("");

    return (
        <AppBar>
            <DrawerButton />
            <Brand id="brand" />
            <SearchBar value={value} onChange={event => {
                console.log(value);
                setValue(event.target.value);
            }} onEnter={event => console.log("ENTER=" + event.target.value)}/>
        </AppBar>
    );
};
