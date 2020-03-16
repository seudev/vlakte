import React from 'react';

import PropTypes from 'prop-types';
import { default as MuiSelect } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Message } from '@seudev/x-i18n';
import { FieldContext, Controller } from './Field';

const Select = ({ options, optionValue, optionLabel, children }) => {
    return (
        <FieldContext.Consumer>
            {({ id, messagePrefix, required }) => (
                <Controller>
                    <MuiSelect id={`${id}-input`}>
                        <MenuItem value='' divider disabled={required}>
                            <Message id={`${messagePrefix}.placeholder`} />
                        </MenuItem>
                        {options &&
                            options.map(option => (
                                <MenuItem key={option[optionValue]} value={option[optionValue]}>
                                    {option[optionLabel]}
                                </MenuItem>
                            ))}
                        {children}
                    </MuiSelect>
                </Controller>
            )}
        </FieldContext.Consumer>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    optionValue: PropTypes.string.isRequired,
    optionLabel: PropTypes.string.isRequired
};

Select.defaultProps = {
    optionValue: 'id',
    optionLabel: 'label'
};

export default Select;
