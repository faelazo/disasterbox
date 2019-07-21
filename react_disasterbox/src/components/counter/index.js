import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        float: "left",
    }
}))


const Counter = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <p>Contador: {props.contador}</p>
            <button onClick={props.onIncrement}>Incrementar</button>
            <button onClick={props.onDecrement}>Decrementar</button>
        </Container>
    );
};

export default Counter;