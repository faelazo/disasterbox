import React from 'react';
import Thing from './Thing';

const Content = ({handlerClick}) => {

    return (
        <div id="Content">
            <Thing title="Lista de Clientes" image="https://www.a3coaching.com/wp-content/uploads/2017/09/lista.png" handlerClick={() => {return handlerClick("Lista de Clientes")}}></Thing>
        </div>
    );
};

export default Content;