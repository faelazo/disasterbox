import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: 'rgb(100, 109, 149)',
        position: "absolute",
        bottom: 0,
        height: 25
    },
    title: {
        color: '#FFF',
        fontSize: 14,
        fontStyle: 'italic',
        float: 'right',
        verticalAlign: 'center'
    }
}));

const FooterHome = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth='xl'>
            <label className={classes.title}>Rafael Moreno</label>
        </Container>
    );
};

export default FooterHome;