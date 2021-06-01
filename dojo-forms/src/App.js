import React from 'react';
import './App.css';
import Email from './Email';
import Name from './Name';
import Cpf from './Cpf';
import Adress from './Adress';
import City from './City';
import { addPerson } from './Redux/actions/index';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fname:'',
      email: '',
      cpf: '',
      adress: '',
      city: '',
    }
  }

handleValue = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
}

handleClick = () => {

 const { fname, email, cpf, adress, city, } = this.state;
 const { addPerson } = this.props;

 const personData = {
   fname,
   email,
   cpf,
   adress,
   city,
 }

 addPerson(personData);

}

  render() {
    const { people } = this.props;

    console.log(people);

    return (
      <div>
         <form className="form">
           <fieldset>
            <h1>Formulário de curriculo</h1>
            <label>Teste</label><br/>
            <Name name='fname' label='Nome:' callBack={this.handleValue} value={this.state.fname} />
            <Email name='email' label='Email:' callBack={this.handleValue} value={this.state.email} />
            <Cpf name='cpf' label='CPF:' callBack={this.handleValue} value={this.state.cpf}/>
            <Adress name='adress' label='Endereço:' callBack={this.handleValue} value={this.state.adress} />
            <City name='city' label='Cidade:' callBack={this.handleValue} value={this.state.city} />
           </fieldset>
           <button type='button' onClick={ () => this.handleClick()}>Enviar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.cadastro.people,
});
  
const mapDispatchToProps = (dispatch) => ({
addPerson: (payload) => dispatch(addPerson(payload)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
