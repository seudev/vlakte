import React from 'react';

import PropTypes from 'prop-types';
import { useRouteMatch, Link as RouteLink } from 'react-router-dom';
import { default as MuiBreadcrumbs } from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Message } from '@seudev/x-i18n';

const Breadcrumbs = ({ routes, maxItems, itemsBeforeCollapse, itemsAfterCollapse }) => (
    <MuiBreadcrumbs aria-label="breadcrumb" maxItems={maxItems} itemsBeforeCollapse={itemsBeforeCollapse} itemsAfterCollapse={itemsAfterCollapse}>
        {routes.filter(({ path, breadcrumb }) => breadcrumb && useRouteMatch(path))
            .map(({ title, path }) => (
                <Link key={path} color="inherit" to={path} component={RouteLink}>
                    <Message id={title} default={title} />
                </Link>
            ))}
    </MuiBreadcrumbs>
);

Breadcrumbs.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        breadcrumb: PropTypes.bool
    })).isRequired,
    maxItems: PropTypes.number.isRequired,
    itemsBeforeCollapse: PropTypes.number.isRequired,
    itemsAfterCollapse: PropTypes.number.isRequired
};

Breadcrumbs.defaultProps = {
    maxItems: 3,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1
};

export default Breadcrumbs;
