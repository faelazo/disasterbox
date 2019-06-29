import React from 'react';
import Home from 'home';

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
                        console.log("Hola Heroku!");
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
                        <p>Prueba de obtención de JSON:</p>
                        <ul>
                              {this.getContent()}
                        </ul>
                  </div>
            );
    };
};

export default model;