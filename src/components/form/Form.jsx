import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { ReactReduxContext } from 'react-redux';
import { useForm } from 'react-hook-form';
import JSError from '@seudev/js-error';
import { getCurrentLang } from '@seudev/x-i18n';

import en from './validation/messages/joi/en';

export const messagesProvider = lang => import(`./validation/messages/joi/${lang}`);

export const buildGetMessages = options => {
    const config = {
        messagesProvider,
        getCurrentLang,
        fallback: en,
        ...options
    };

    return async () => {
        const lang = config.getCurrentLang();

        return config
            .messagesProvider(lang)
            .then(data => data.default)
            .catch(ex => {
                if (config.fallback) {
                    return config.fallback;
                }
                throw new JSError(
                    {
                        name: 'Vlakte',
                        message: `Cannot load the validation messages of lang: ${lang}`,
                        data: { lang }
                    },
                    ex
                );
            });
    };
};

export const validationResolverConfig = {
    getMessages: buildGetMessages(),
    validationOptions: {
        abortEarly: false,
        errors: {
            label: false
        }
    }
};

export const buildValidationResolver = (schema, options) => {
    const config = {
        ...validationResolverConfig,
        ...options
    };

    return async data => {
        let validationOptions = config.validationOptions;

        if (config.getMessages && !config.messages) {
            validationOptions = {
                ...validationOptions,
                messages: await config.getMessages()
            };
        }

        const { error, value } = schema.validate(data, validationOptions);

        return {
            values: error ? {} : value,
            errors: error ? _.groupBy(error.details, e => e.path.join('.')) : {}
        };
    };
};

export const formActions = {
    create: 'create',
    read: 'read',
    update: 'update',
    delete: 'delete'
};

export const FormContext = React.createContext();

export const useFormContext = () => React.useContext(FormContext);

const isReadOnly = ({ action, readOnly, readOnlyDuringSubmit }, hook) => {
    return (
        (readOnlyDuringSubmit && hook.formState.isSubmitting) ||
        readOnly ||
        action === formActions.read ||
        action === formActions.delete
    );
};

const Form = props => {
    const { id, action, hookOptions, onSubmit, children } = props;
    const hook = useForm(hookOptions);

    const messagePrefix = `forms.${id}`;
    const form = {
        id,
        hookOptions: hookOptions,
        messagePrefix,
        actionMessagePrefix: `${messagePrefix}.actions.${action}`,
        action,
        readOnly: isReadOnly(props, hook),
        hook
    };

    return (
        <FormContext.Provider value={form}>
            <ReactReduxContext.Consumer>
                {({ store }) => {
                    store.subscribe(() => {
                        form.hook.triggerValidation();
                    });

                    return (
                        <form onSubmit={form.hook.handleSubmit(onSubmit)}>
                            <span>readOnly = {form.readOnly.toString()}</span>
                            {children}
                        </form>
                    );
                }}
            </ReactReduxContext.Consumer>
        </FormContext.Provider>
    );
};

Form.propTypes = {
    id: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    action: PropTypes.string.isRequired,
    hookOptions: PropTypes.object.isRequired,
    readOnlyDuringSubmit: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func
};

Form.defaultProps = {
    readOnly: false,
    readOnlyDuringSubmit: true,
    hookOptions: {}
};

export default Form;
