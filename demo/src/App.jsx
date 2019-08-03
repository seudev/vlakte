import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { connect } from '../../src/redux/Provider';
import { i18nActions, Message } from '@seudev/x-i18n';

import en from './i18n/en';

class App extends Component {

    componentWillMount() {
        this.props.xi18n({
            fallback: en,
            all: [
                "en",
                "pt-BR"
            ],
            messagesProvider: lang => import(`./i18n/${lang}`)
        });
        this.props.tryUseNavigatorLang();
    }

    render() {
        return (
            <Router>
                <Message as="h1" id="brand" />
            </Router>
        );
    }
}

export default connect('i18n', i18nActions, App);
