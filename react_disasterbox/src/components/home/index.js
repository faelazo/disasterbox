import React from 'react';

import Header from './HeaderHome';
import Content from './ContentHome';
import Footer from './FooterHome';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Content />
            <Footer />
        </React.Fragment>
    );
};

export default Home;