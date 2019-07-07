import React from 'react';
import Header from './home/Header';
import Content from './home/Content';
import Footer from './home/Footer';

import ListClients from './listClients';

class model extends React.Component{

      constructor(){
            super();
            this.state = {
                  load: "home"
            }
      }

      componentWillMount(){
            
      }

      handlerClick = (boton) => {
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

            return ("");
/*
            var cliente = [
                  {
                      "id":1,
                      "name":"Antonio",
                      "firstname":"Pérez",
                      "surname":"Rodríguez",
                      "gender":"V",             
                      "birthday":"28/03/1980",
                      "email":"aperezro@prueba.com",
                      "telephone":"956293847",
                      "mobile":"645839488",
                      "vip":1
                  },{
                        "id":2,
                        "name":"Mario",
                        "firstname":"Gutierrez",
                        "surname":"Gómez",
                        "gender":"V",             
                        "birthday":"08/11/1970",
                        "email":"mgutierrezgo@prueba.com",
                        "telephone":"",
                        "mobile":"663536632",
                        "vip":0
                    }];

            return ();*/
      };

      getContent = () => {

            switch(this.state.load){
                  case 'home': return (<Content handlerClick={this.handlerClick}></Content>);
                  case 'Lista de Clientes': return (<ListClients handlerClick={this.handlerClick}></ListClients>);
                  default: return (<Content handlerClick={this.handlerClick}></Content>);
            };
            /*
            return this.state.clientes.map(item => {
                        return (<li key={item.id}>{item.name} {item.firstname} {item.surname}</li>)
            });*/
      };

      render() {
            return (
                  <div id="contenido">
                        <Header></Header>
                        {this.getContent()}
                        <Footer></Footer>
                  </div>
            );
      };
};

export default model;