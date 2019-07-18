import React from 'react';
import { Link } from 'react-router-dom';

class OtherPage extends React.Component{
    render(){
        return (
            <React.Fragment>
                <p>Evi achuwoki</p>
                <button onClick={this.props.handlerInc}>Incrementar</button>
                <button onClick={this.props.handlerDec}>Decrementar</button><br></br>
                <Link to="/">Volver</Link>
            </React.Fragment>
    )};
};

export default OtherPage;