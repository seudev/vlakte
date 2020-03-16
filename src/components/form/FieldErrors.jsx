import React from 'react';

import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core/styles';

import { useFieldContext } from './Field';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginLeft: ({ level }) => {
            return `${level}rem`;
        }
    },
    helper: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    icon: {
        fontSize: '1rem',
        marginRight: '5px'
    },
    message: {
        '&:first-letter': {
            textTransform: 'uppercase'
        }
    }
});

const FieldErrors = () => {
    const { hasErrors, errors } = useFieldContext();

    if (!hasErrors) {
        return false;
    }

    const ErrorContainer = props => {
        const classes = useStyles(props);

        return (
            <div className={`field-errors ${classes.root}`}>
                {props.errors.map(({ message, context }, index) => (
                    <FormHelperText key={index} error component='div' className={classes.helper}>
                        <ErrorOutlineIcon className={classes.icon} />
                        <span className={classes.message}>{message}</span>
                        {context && context.details instanceof Array && (
                            <ErrorContainer errors={context.details} level={props.level + 1} />
                        )}
                    </FormHelperText>
                ))}
            </div>
        );
    };

    return <ErrorContainer errors={errors} level={0} />;
};

FieldErrors.propTypes = {};

FieldErrors.defaultProps = {};

export default FieldErrors;
