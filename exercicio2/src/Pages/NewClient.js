import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addClientes } from '../actions'

class NewCLient extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      email: '',
    }
  }

  handleClick = () => {
    const { addClientes } = this.props;
    const { name, age, email } = this.state;

    const sendObj = {
      name,
      age,
      email,
    }

    addClientes(sendObj);

  }

  render() {

    return (
      <main>
        <form>
          < input
            type={ 'text'}
            placeholder={'Nome'}
            onChange={(event) =>this.setState({name: event.target.value})}
          />
          < input
            type={ 'number'}
            placeholder={'Idade'}
            onChange={(event) =>this.setState({age: event.target.value})}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <Link to={ '/clientes' } onClick={ this.handleClick }>Cadastrar</Link>
        </form>
      </main>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addClientes: payload => dispatch(addClientes(payload))});

export default connect(null, mapDispatchToProps)(NewCLient);