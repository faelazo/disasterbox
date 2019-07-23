import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Bread from '../Bread';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
        marginBottom: 60
    },
}));

const Blog = () => {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
            <Bread path={["Blog"]} />
            <Link to="/blog/sample/counter">Contador</Link>
        </Container>
    );
};

export default Blog;