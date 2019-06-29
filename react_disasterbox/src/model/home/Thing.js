import React from 'react';

const Thing = ({image, title}) => {

    return (
        <div className="thing_container">
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
        </div>
    );

};

export default Thing;