import React from 'react';

class Email extends React.Component {
  render() {
    const { value, atualizar } = this.props;
    return (
      <div>
        <label htmlFor="em">Email: </label>
        <textarea id="em" name="Email" maxLength="50" value={value} onChange={atualizar}/>
      </div>
    );
  }
}

export default Email;