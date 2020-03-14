import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Translate';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import { setLang } from '@seudev/x-i18n/es/i18nActions';
import { Message, getMessage } from '@seudev/x-i18n';

import { connect } from '../../Redux';

const useStyles = makeStyles(theme => ({
    currentLang: {
        margin: theme.spacing(0, 0.5, 0, 1),
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'inline'
        }
    }
}));

const LanguageDropdown = ({ setLang, state: { lang } }) => {
    const currentLang = lang.current;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const close = () => setAnchorEl(null);
    const classes = useStyles();

    return (
        <React.Fragment>
            <Tooltip title={getMessage('changeLang')}>
                <Button
                    color='inherit'
                    onClick={event => {
                        setAnchorEl(event.currentTarget);
                    }}>
                    <LanguageIcon />
                    <span className={classes.currentLang}>
                        <Message id={`langs.${currentLang}.description`} />
                    </span>
                    <ExpandMoreIcon fontSize='small' />
                </Button>
            </Tooltip>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={close}>
                {lang.all.map(lang => (
                    <MenuItem
                        key={lang}
                        component='a'
                        selected={lang === currentLang}
                        onClick={() => {
                            setLang(lang);
                            close();
                        }}>
                        <Message id={`langs.${lang}.description`} />
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
};

export default connect('i18n', { setLang }, LanguageDropdown);
