import React from 'react';
import Header from './home/Header';
import Content from './home/Content';
import Footer from './home/Footer';

class model extends React.Component{

    constructor(){
          super();
          this.state = {
                clientes: []
          }
    }

    componentWillMount(){
          var prop_fetch = {
                method: 'GET',
                headers: {
                  "access-control-allow-origin" : "*",
                  "Content-type": "application/json; charset=UTF-8"
                }
          };

          fetch('/home', prop_fetch).then(data => {
                        
                        return data.json();
                }).then( data => {
                      console.log("Hola");
                        this.setState({clientes: data.clients});
                });
    }

    getContent = () => {
          
          return this.state.clientes.map(item => {
                  return (<li key={item.id}>{item.name} {item.firstname} {item.surname}</li>)
          });
    };

    render() {
            return (
                  <div id="contenido">
                        <Header></Header>
                        <Content></Content>
                        <Footer></Footer>
                  </div>
            );
    };
};

export default model;