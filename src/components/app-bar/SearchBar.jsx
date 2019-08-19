import React from 'react';

import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { getMessage } from '@seudev/x-i18n';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

const SearchBar = props => {
    const { placeholder, value, onChange, onEnter, onKeyUp } = props;
    const classes = useStyles();

    const onKeyUpHandler = (onEnter ? event => {
        if (event && (event.type === 'keyup') && (event.key === "Enter")) {
            onEnter(event);
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
    } : onKeyUp);

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                onChange={onChange}
                onKeyUp={onKeyUpHandler}
                placeholder={getMessage(placeholder)}
                value={value}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onKeyUp: PropTypes.func
};

SearchBar.defaultProps = {
    placeholder: "appBar.searchBar.placeholder",
};

export default SearchBar;
