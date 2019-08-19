import React, { Component } from 'react';

import { Message } from '@seudev/x-i18n';
import { Helmet } from "react-helmet";
import CssBaseline from '@material-ui/core/CssBaseline';
import I18n from '@seudev/x-i18n';
import en from './i18n/en';
import MainDrawer from './components/MainDrawer';
import MainAppBar from './components/MainAppBar';
import LoginForm from './components/LoginForm';

export default props => (
    <React.Fragment>
        <I18n init={{ fallback: en, all: ['en', 'pt-BR'], messagesProvider: lang => import(`./i18n/${lang}`) }} tryUseNavigatorLang />
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        <CssBaseline />
        <MainAppBar />
        <MainDrawer />
        <main style={{ padding: "20px" }}>
            <LoginForm />
        </main>
    </React.Fragment>
);
