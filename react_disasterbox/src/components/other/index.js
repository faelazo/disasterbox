import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = (props) => {
    return (
        <React.Fragment>
            <p>Evi achuwoki {props.valor}</p>
            <button onClick={props.handlerInc}>Incrementar</button>
            <button onClick={props.handlerDec}>Decrementar</button><br></br>
            <Link to="/">Volver</Link>
        </React.Fragment>
    );
};

export default OtherPage;