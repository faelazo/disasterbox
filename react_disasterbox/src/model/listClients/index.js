import React, { Component } from 'react';

class listClient extends Component{

    constructor(){
        super();
        this.state ={clients: []};
    }

    componentDidMount() {
        var prop_fetch = {
            method: 'GET',
            headers: {
                  "access-control-allow-origin" : "*",
                  "Content-type": "application/json; charset=UTF-8"
            }
        };

        fetch('/listaClientes', prop_fetch).then(data => {
                return data.json();
        }).then(data => {
                this.setState({clients: data.clients});
        });
    }
    
    makeList = () => {
        
        return this.state.clients.map(item => {
            return (<li key={item.id}>{item.name} {item.firstname} {item.surname}</li>)
        });
    };
    
    render(){
        return (
            <div>
                <ul>
                    {this.makeList()}
                </ul>
                <button onClick={() => {return this.props.handlerClick('home')}}>Volver</button>
            </div>
        );
    };
};

export default listClient;