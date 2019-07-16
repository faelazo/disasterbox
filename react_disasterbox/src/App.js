import React from 'react';
import { Link } from 'react-router-dom';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Hola que ase</p>
      <Home></Home>
      <Link to="/Other/1" >Other</Link>
    </div>
  );
}

export default App;
