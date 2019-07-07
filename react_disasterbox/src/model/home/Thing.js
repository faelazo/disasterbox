import React from 'react';

const Thing = ({image, title, handlerClick}) => {

    return (
        <div className="thing_container">
            <img src={image} alt={title} onClick={() => {return handlerClick(title);}}></img>
            <h3>{title}</h3>
        </div>
    );

};

export default Thing;