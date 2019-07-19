import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (message = "") => {

    return (
        <React.Fragment>
            <h1>Po va a ser que no</h1>
            <Link to="/">Volver</Link>
        </React.Fragment>
    );
};

export default NotFoundPage;