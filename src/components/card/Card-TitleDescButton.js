import React from 'react';
<<<<<<< HEAD
// import './financial-help.css';
=======
>>>>>>> origin/mandy
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const cardStyles = makeStyles({
    root: {
        maxWidth: 700, // TODO: make responsive
        variant: "outlined",
        margin: 10,
    },
    content: {
        padding: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
    },
});

const CardTitleDescButton = (props) => {
    const classes = cardStyles();

    const { title, description, id, url } = props;

    const handleClick = () => {
        window.open(url);
    };

    return (
        <Card className={classes.root} id={id}>
            <CardContent>
                <Typography className={classes.title}>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleClick}>
                    Find out more
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardTitleDescButton;
