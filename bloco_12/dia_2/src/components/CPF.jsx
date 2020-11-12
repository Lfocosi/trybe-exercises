import React from 'react';

class CPF extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="cp">CPF: </label>
        <textarea id="cp" name="CPF" maxLength="11" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default CPF;