import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';

const useStyle = makeStyles(theme => ({
    root: {
        position: "relative",
        float: "left",
        overflowY: 'auto',
    }
}));

const ContentHome = () => {
    
    const classes = useStyle();

    return (
        <Container className={classes.root} maxWidth='xl'>
            <p>Content Home</p>
        </Container>
    );
};

export default ContentHome;