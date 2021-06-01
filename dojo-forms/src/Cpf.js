import React from 'react';

class Cpf extends React.Component {
  render() {
    const { callBack, value } = this.props

    let error;
    if(value.length > 11) error = 'Nome deve ter no máximo 40 caracteres!';
    if(value.length === 0) error = 'Requisito obrigatório!'

    return (
    <div>
      <label>{ 'CPF:' }</label><br/>
      <input type='text' name={'cpf'} onChange={callBack} value={value}></input>
      <br/><span style={{ color: "red", fontSize: "12px"}} >{error}</span>
    </div>
    );
  }
}

export default Cpf;