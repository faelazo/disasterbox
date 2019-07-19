import React from 'react';
import { Link } from 'react-router-dom';

const Counter = (props) => {
    return (
        <React.Fragment>
            <p>Contador: {props.contador}</p>
            <button onClick={props.onIncrement}>Incrementar</button>
            <button onClick={props.onDecrement}>Decrementar</button>
            <Link to="/">Volver</Link>
        </React.Fragment>
    );
};

export default Counter;