import React from 'react';

import PropTypes from 'prop-types';
import { default as MuiFormControl } from '@material-ui/core/FormControl';
import { default as MuiInputLabel } from '@material-ui/core/InputLabel';
import { Message } from '@seudev/x-i18n';
import { Controller as HookController } from 'react-hook-form';

import { useFormContext } from './Form';
import FieldErrors from './FieldErrors';

export const FieldContext = React.createContext();

export const useFieldContext = () => React.useContext(FieldContext);

export const InputLabel = () => {
    const { id, label, messagePrefix } = useFieldContext();

    return (
        <MuiInputLabel id={`${id}-label`}>
            <Message id={`${messagePrefix}.label`} default={label} />
        </MuiInputLabel>
    );
};

export const Controller = ({ children }) => {
    const { name, form, onChange } = useFieldContext();

    return (
        <HookController
            as={children}
            name={name}
            control={form.hook.control}
            onChange={([event]) => {
                const result = onChange && onChange(event);
                return result === undefined ? event : result;
            }}
        />
    );
};

export const FormControl = ({ children }) => {
    const { id, hasErrors, required, readOnly } = useFieldContext();

    return (
        <MuiFormControl id={`${id}-control`} fullWidth error={hasErrors} required={required} disabled={readOnly}>
            <InputLabel />
            {children}
            <FieldErrors />
        </MuiFormControl>
    );
};

const Field = ({ id, name, label, placeholder, required, readOnly, noWrap, children }) => {
    const form = useFormContext();
    const errors = form.hook.errors[name];
    const hasErrors = errors && errors.length > 0;
    const field = {
        id: id || form.id + '-' + name,
        name,
        label,
        hasErrors,
        errors: errors,
        placeholder,
        messagePrefix: `${form.messagePrefix}.fields.${name}`,
        required,
        readOnly: readOnly != null ? readOnly : form.readOnly,
        form
    };

    return (
        <FieldContext.Provider value={field}>
            {noWrap ? children : <FormControl>{children}</FormControl>}
        </FieldContext.Provider>
    );
};

Field.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
    readOnly: PropTypes.bool,
    noWrap: PropTypes.bool.isRequired,
    onChange: PropTypes.func
};

Field.defaultProps = {
    required: false,
    noWrap: false
};

export default Field;
