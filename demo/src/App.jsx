import React, { Component } from 'react';

import { connect } from '../../src/redux/Provider';
import { i18nActions, Message } from '@seudev/x-i18n';
import { Helmet } from "react-helmet";
import CssBaseline from '@material-ui/core/CssBaseline';
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
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                </Helmet>
                <CssBaseline />
                <Message id="brand" />
            </React.Fragment>
        );
    }
}

export default connect('i18n', i18nActions, App);
