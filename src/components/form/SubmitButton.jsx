import React from 'react';

import PropTypes from 'prop-types';

import { useFormContext, formActions } from './Form';
import FormButton from './FormButton';

const SubmitButton = ({ hiddenIfReadOnly, visibleInActions }) => {
    const { readOnly, hook, action } = useFormContext();
    return (
        <FormButton
            type='submit'
            suffix='submit'
            color='primary'
            disabled={hook.formState.isSubmitting || (readOnly && action !== formActions.delete)}
            hiddenIfReadOnly={hiddenIfReadOnly}
            visibleInActions={visibleInActions}
            processing={hook.formState.isSubmitting}
        />
    );
};

SubmitButton.propTypes = {
    hiddenIfReadOnly: PropTypes.bool.isRequired,
    visibleInActions: PropTypes.arrayOf(PropTypes.string)
};

SubmitButton.defaultProps = {
    hiddenIfReadOnly: true,
    visibleInActions: [formActions.create, formActions.update, formActions.delete]
};

export default SubmitButton;
