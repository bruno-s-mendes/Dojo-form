import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClientList extends Component {
  // constructor() {
  //   super();
  //   this.listaDeClientes = this.listaDeClientes.bind(this);
  // }

  listaDeClientes = () => {
    const { clientes } = this.props;

    if(clientes.length > 0) {
      return(
        clientes.map((cliente) => 
          <div>
            <p>{ cliente.name }</p>
            <p>{ cliente.age }</p>
            <p>{ cliente.email }</p>
          </div>
        )
      )
    } else {
      return(
        <div>
          <h2>Nenhum cliente cadastrado</h2>
        </div>
      )
    }
  }

  render() {
    const { usuario } = this.props;

    return (
      <main>
        <h1>Lista de Clientes</h1>
        { usuario !== undefined ? this.listaDeClientes() : 
        <h2>Login não efetuado</h2> }
        <Link to={'/newclient'}>cadastrar Novo cliente</Link>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  clientes: state.cadastroReducer,
  usuario: state.loginReducer.email});

export default connect(mapStateToProps, null)(ClientList);