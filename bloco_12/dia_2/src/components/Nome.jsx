import React from 'react';

class Nome extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="nm">Nome: </label>
        <textarea id="nm" name="Nome" maxLength="40" value={value} onChange={atualizar} />
      </div>
    );
  }
}

export default Nome;
