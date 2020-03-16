import React from 'react';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Message } from '@seudev/x-i18n';
import { useFormContext } from './Form';

const useStyles = makeStyles(theme => ({
    progress: {
        marginRight: theme.spacing(1),
        display: ({ processing }) => (processing ? 'block' : 'none')
    }
}));

const FormButton = props => {
    const { type, color, variant, onClick, suffix, disabled, hiddenIfReadOnly, visibleInActions } = props;
    const classes = useStyles(props);
    const { action, readOnly, actionMessagePrefix } = useFormContext();
    const isVisibleInAction = !visibleInActions || visibleInActions.includes(action);

    if (!isVisibleInAction || (readOnly && hiddenIfReadOnly && !isVisibleInAction)) {
        return false;
    }

    return (
        <Button
            type={type}
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}>
            <CircularProgress color='secondary' size={20} className={classes.progress} />
            <Message as='span' id={`${actionMessagePrefix}.${suffix}`} />
        </Button>
    );
};

FormButton.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    variant: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    suffix: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    hiddenIfReadOnly: PropTypes.bool.isRequired,
    visibleInActions: PropTypes.arrayOf(PropTypes.string)
};

FormButton.defaultProps = {
    variant: 'contained',
    disabled: false,
    hiddenIfReadOnly: false,
};

export default FormButton;
