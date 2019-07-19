import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = (props) => {
    return (
        <React.Fragment>
            <p>Evi achuwoki</p>
            <Link to="/">Volver</Link>
        </React.Fragment>
    );
};

export default OtherPage;