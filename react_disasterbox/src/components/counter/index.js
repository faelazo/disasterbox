import React from 'react';

const Counter = (props) => {
    return (
        <React.Fragment>
            <p>Contador: {props.contador}</p>
            <button onClick={props.onIncrement}>Incrementar</button>
            <button onClick={props.onDecrement}>Decrementar</button>
        </React.Fragment>
    );
};

export default Counter;