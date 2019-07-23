import React from 'react';

import Content from './ContentHome';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    rootHeader: { 
        width: '100%',
        position: 'fixed',
        marginTop: 58,
    },
    bar: {
        maxHeight: 54,
        background: 'transparent',
    },
    title: {
        flexGrow: 1,
    },
    options: {
        color: 'rgb(100,100,100)',
        fontWeight: 'bold',
        fontSize: 16,
    },
}));


const Home = () => {

    const classes = useStyles();

    return (
        <Box className={classes.rootHeader}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={[classes.title, classes.options]}>
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
            <Content />
        </Box>
    );
};

export default Home;