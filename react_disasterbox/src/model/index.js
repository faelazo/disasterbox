import React from 'react';
import Header from './home/Header';
import Content from './home/Content';
import Footer from './home/Footer';

class model extends React.Component{

      handlerClick = (boton) => {
<<<<<<< HEAD
            this.setState({load: boton});
      };
      
      async getDataClients() {
            
            var prop_fetch = {
                  method: 'GET',
                  headers: {
                        "access-control-allow-origin" : "*",
                        "Content-type": "application/json; charset=UTF-8"
                  }
            };

            await fetch('/listaClientes', prop_fetch).then(data => {
                  return data.json();
            }).then(data => {
                  this.setState({clients: data.clients});
            });

            console.log(this.state.clients);
            console.log("Esto es getDataClients");

            return ("");
=======
            
>>>>>>> master
      };
      
      getContent = () => {
<<<<<<< HEAD
            switch(this.state.load){
                  case 'home': return (<Content handlerClick={this.handlerClick}></Content>);
                  case 'Lista de Clientes': return (<ListClients handlerClick={this.handlerClick}></ListClients>);
                  default: return (<Content handlerClick={this.handlerClick}></Content>);
            };
=======
            return (<Content handlerClick={this.handlerClick}></Content>);
>>>>>>> master
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