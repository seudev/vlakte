import React from 'react';

import Form, { buildValidationResolver } from '../../../src/components/form/Form';
import Field from '../../../src/components/form/Field';
import Select from '../../../src/components/form/Select';
import SubmitButton from '../../../src/components/form/SubmitButton';
import ResetButton from '../../../src/components/form/ResetButton';

import Joi from '@hapi/joi';
import _ from 'lodash';

const selectOptions = [
    { id: 3, label: 'java' },
    { id: '*837*37436473***%%###*****', label: 'javascript' },
    { id: 2, label: 'python' },
    { id: 4, label: 'go' },
    { id: 5, label: 'c++' }
];

const validationSchema = Joi.object({
    language: Joi.alternatives().try(
        Joi.string()
            .required()
            .max(3)
            .alphanum(),
        Joi.number()
            .required()
            .min(5)
    )
});

const hookFormOptions = {
    mode: 'onChange',
    validationResolver: buildValidationResolver(validationSchema),
    defaultValues: {
        language: ''
    }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const handleSubmit = async event => {
    console.log('submitting');
    await sleep(2000);
    console.log(event);
};

const handleChange = event => console.log(event);

export default () => (
    <Form id='example' action='create' hookOptions={hookFormOptions} onSubmit={handleSubmit}>
        <div>{/* <pre>{JSON.stringify(form.errors, null, 2)}</pre> */}</div>
        <div>
            <div>
                <Field name='language' onChange={handleChange} required>
                    <Select options={selectOptions} />
                </Field>
            </div>
        </div>
        <ResetButton />
        <SubmitButton />
    </Form>
);
