import React from 'react';

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
                        <ul>
                              {this.getContent()}
                        </ul>
                  </div>
            );
    };
};

export default model;