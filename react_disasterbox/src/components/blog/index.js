import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Box } from '@material-ui/core';

import Bread from '../Bread';

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
        flex: 1,
    },
    options: {
        color: 'rgb(100,100,100)',
        fontWeight: 'bold',
        fontSize: 16,
    },
    content: {
        marginTop: 30,
    },
}));

const Blog = () => {

    const classes = useStyles();

    return (
        <Box className={classes.rootHeader}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={[classes.title, classes.options]}>
                        Blog
                    </Typography>
                    <MenuItem className={classes.options} component={NavLink} to={'/posts'}>
                        <SvgIcon>
                            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </SvgIcon>
                        <Hidden mdDown>Posts</Hidden>
                    </MenuItem>
                    <MenuItem className={classes.options} component={NavLink} to={'/samples'}>
                        <SvgIcon>
                            <path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z" fill="#010101"/>
                        </SvgIcon>
                        <Hidden mdDown>Samples</Hidden>
                    </MenuItem>
                </Toolbar>
            </AppBar>
            <Container className={classes.content} maxWidth="xl">
                <Bread path={["Blog"]} />
                <NavLink to="/blog/sample/counter">Contador</NavLink>
            </Container>
        </Box>
    );
};

export default Blog;