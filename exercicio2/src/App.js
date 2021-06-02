import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import ClientList from './Pages/ClientList';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NewClient from './Pages/NewClient'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/clientes" component={ ClientList } />
        <Route path="/newclient" component={ NewClient } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;