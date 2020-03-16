import React from 'react';

import PropTypes from 'prop-types';

import { useFormContext, formActions } from './Form';
import FormButton from './FormButton';

const ResetButton = ({ hiddenIfReadOnly, visibleInActions }) => {
    const { readOnly, hook } = useFormContext();
    return (
        <FormButton
            type='reset'
            suffix='reset'
            color='default'
            disabled={readOnly}
            hiddenIfReadOnly={hiddenIfReadOnly}
            visibleInActions={visibleInActions}
            onClick={() => hook.reset()}
        />
    );
};

ResetButton.propTypes = {
    hiddenIfReadOnly: PropTypes.bool.isRequired,
    visibleInActions: PropTypes.arrayOf(PropTypes.string)
};

ResetButton.defaultProps = {
    hiddenIfReadOnly: true,
    visibleInActions: [formActions.create, formActions.update]
};

export default ResetButton;
