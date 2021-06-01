import React from 'react';

class Name extends React.Component {
  render() {
    const { callBack, value } = this.props

    let error;
    if(value.length > 40) error = 'Nome deve ter no máximo 40 caracteres!';
    if(value.length === 0) error = 'Requisito obrigatório!'

    return (
    <div>
      <label>{ 'Nome:' }</label><br/>
      <input type='text' name={'fname'} onChange={callBack} value={value.toUpperCase()}></input>
      <br/><span style={{ color: "red", fontSize: "12px"}} >{error}</span>
    </div>
    );
  }
}

export default Name;