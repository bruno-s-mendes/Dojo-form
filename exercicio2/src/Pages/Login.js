import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }
  render() {
    const { email, senha} = this.state;
    const { login } = this.props;

    console.log(email);
    console.log(senha);

    return (
      <div>
        <div>
          <input
            type="text"
            value={ email }
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            type="password"
            value={ senha }
            onChange={event => this.setState({ senha: event.target.value })}
          />
        </div>
        <Link
          to="/clientes"
          onClick={ () => login({ email, senha }) }
        >
          faça seu cadastro
        </Link>
      </div>
    );
  }
}
  
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});
  
export default connect(null, mapDispatchToProps)(Login);
