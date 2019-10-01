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


const notification = {
    title: "",
    description: "",
    image: { src: "", alt: "" },
    route: { to: "" },
    link: { href: "", target: "" },
    actions: {
        "share": true,
        "learnMore": true,
    }
};

const onActionAreaClick = event => {
    console.log(event);
};

const Notification = ({ id, title, description, image, route, link, actions }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.actionArea} action={onActionAreaClick}>
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

};

Notification.defaultProps = {

};

export default Notification;
