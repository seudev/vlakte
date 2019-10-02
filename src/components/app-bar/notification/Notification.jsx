import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    card: {
        margin: 10
    },
    actionArea: {
        display: "flex",
        alignItems: "center",
        padding: 16,
    },
    content: {
        padding: 0
    },
    media: {
        height: 72,
        width: 72,
        marginLeft: 16
    },
});

const Notification = ({ id, title, description, image, route, externalLink, actions }) => {
    const classes = useStyles();
    const history = route ? useHistory() : null;

    const onActionAreaClick = () => {
        if (route) {
            history.push(route);
        } else if (externalLink) {
            if (typeof externalLink === 'string') {
                window.open(externalLink);
            } else {
                const { url, target, features } = externalLink;
                window.open(url, target, features);
            }
        }
    };

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.actionArea} onClick={onActionAreaClick}>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h6" component="h6">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                {image && (
                    <CardMedia>
                        <img className={classes.media} alt={image.alt} src={image.src} />
                    </CardMedia>
                )}
            </CardActionArea>
            {actions && (
                <CardActions>
                    {actions.share && (
                        <Button size="small" color="primary">
                            share
                        </Button>
                    )}
                    {actions.learnMore && (
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    )}
                </CardActions>
            )}
        </Card>
    );
};

Notification.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }),
    route: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            pathname: PropTypes.string.isRequired,
            search: PropTypes.string,
            hash: PropTypes.string,
            state: PropTypes.object
        })
    ]),
    externalLink: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            target: PropTypes.string,
            features: PropTypes.string
        })
    ]),
    actions: PropTypes.object
};

Notification.defaultProps = {

};

export default Notification;
