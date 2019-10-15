import React, { Suspense, lazy } from 'react';

import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';

const RouteContainer = ({ routes, componentProvider, suspenseFallback, redirectTo }) => (
    <Suspense fallback={suspenseFallback}>
        <Switch>
            {routes.map(({ path, exact, strict, sensitive, componentPath }) => (
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    strict={strict}
                    sensitive={sensitive}
                    component={lazy(() => componentProvider(componentPath))}
                />
            ))}
            {redirectTo && (
                <Redirect to={redirectTo} />
            )}
        </Switch>
    </Suspense>
);

RouteContainer.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        strict: PropTypes.bool,
        sensitive: PropTypes.bool,
        componentPath: PropTypes.string.isRequired
    })).isRequired,
    componentProvider: PropTypes.func.isRequired,
    suspenseFallback: PropTypes.element.isRequired,
    redirectTo: PropTypes.string
};

RouteContainer.defaultProps = {

};

export default RouteContainer;
