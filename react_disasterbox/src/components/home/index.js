import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <p>aquí aburrio o que ase</p>
            <Link to="/other/1" >Other</Link>
            <Link to="/counter" >Counter</Link>
        </React.Fragment>
    );
};

export default Home;