import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    rootHeader: { 
        flexGrow: 1, 
        width: '100%',
        position: 'fixed',
        top: 0,
    },
    bar: {
        background: 'rgb(100, 109, 149)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        fontSize: 50,
        fontFamily: 'barrio'
    },
    options: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        paddingRight: 5,
    },
    bread: {
        marginLeft: 20,
    }
}));

const HeaderHome = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.rootHeader}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Hidden smDown>Disaster Box</Hidden>
                        <Hidden mdUp>DB</Hidden>
                    </Typography>
                    <MenuItem className={classes.options} component={NavLink} to={'/'}>
                        <SvgIcon>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </SvgIcon>
                        <Hidden mdDown>Home</Hidden>
                    </MenuItem>
                    <MenuItem className={classes.options} component={NavLink} to={'/blog'}>
                        <SvgIcon>
                            <path d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z" />
                        </SvgIcon>
                        <Hidden mdDown>Blog</Hidden>
                    </MenuItem>
                    <MenuItem className={classes.options} component={NavLink} to={'/about'}>
                        <SvgIcon>
                            <path d="M13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4A4,4 0 0,1 13,8M17,18V20H1V18C1,15.79 4.58,14 9,14C13.42,14 17,15.79 17,18M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1 20,6A3,3 0 0,1 23,9C23,9.97 22.5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 21.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 18.5,9V9.5Z" />
                        </SvgIcon>
                        <Hidden mdDown>About</Hidden>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderHome;