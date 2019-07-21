import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        float: "left",
    }
}))

const OtherPage = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <p>Evi achuwoki</p>
        </Container>
    );
};

export default OtherPage;