import React from 'react';

class Cargo extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="cg">Cargo: </label>
        <textarea id="cg" name="Cargo" maxLength="40" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default Cargo;