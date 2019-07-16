import React from 'react';
import { Link } from 'react-router-dom';

class Other extends React.Component{
    render(){
        console.log(this.props);
        return (
            <React.Fragment>
                <p>Evi achuwoki</p>
                <Link to="/">Volver</Link>
            </React.Fragment>
    )};
};

export default Other;