import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Bread from '../../../Bread';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 100,
        marginBottom: 60,
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
}))

const Counter = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="xl">
            <Bread path={["Blog", "Samples", "Counter"]} />
            <p>Contador: {props.contador}</p>
            <button onClick={props.onIncrement}>Incrementar</button>
            <button onClick={props.onDecrement}>Decrementar</button>
        </Container>
    );
};

export default Counter;