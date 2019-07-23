import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
        marginBottom: 60
    }
}));

const NotFoundPage = (message = "") => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <h1>Po va a ser que no</h1>
        </Container>
    );
};

export default NotFoundPage;