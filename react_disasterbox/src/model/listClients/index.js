import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class listClients extends Component{

    constructor(){
        super();
        this.state ={clients: []};
        
    }

    componentDidMount(){
        
        this.getDataClients();
    }

    async getDataClients() {
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

        return ("");
    }      

    makeList = () => {

        return this.state.clients.map(item => {
            return (
                <li key={item.id}>{item.name} {item.firstname} {item.surname}</li>
            );
        });
    };
    
    render(){
        return (
            <div>
                <ul component="nav" aria-label="Main mailbox folders">
                    {this.makeList()}
                </ul>
                <Button variant="contained" color="secondary" onClick={() => {return this.props.handlerClick('home')}}>Volver</Button>
            </div>
        );
    };
};

export default listClients;