import React from 'react';

class ResumoDoCurrículo extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="rc">Resumo do currículo: </label>
        <textarea id="rc" name="ResumoDoCurrículo" maxLength="1000" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default ResumoDoCurrículo;