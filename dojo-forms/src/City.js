import React from 'react';

class City extends React.Component {
  render() {
    const { callBack, value } = this.props

    let error;
    if(value.length > 28) error = 'Nome deve ter no máximo 40 caracteres!';
    if(value.length === 0) error = 'Requisito obrigatório!'

    return (
    <div>
      <label>{ 'Cidade:' }</label><br/>
      <input type='text' name={'city'} onChange={callBack} value={value}></input>
      <br/><span style={{ color: "red", fontSize: "12px"}} >{error}</span>
    </div>
    );
  }
}

export default City;