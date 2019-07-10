import React from 'react';
import Header from './home/Header';
import Content from './home/Content';
import Footer from './home/Footer';

class model extends React.Component{

      handlerClick = (boton) => {
            
      };

      getContent = () => {
            return (<Content handlerClick={this.handlerClick}></Content>);
      };

      render() {
            return (
                  <div id="contenido">
                        <Header></Header>
                        {this.getContent('home')}
                        <Footer></Footer>
                  </div>
            );
      };
};

export default model;