import React, { Component } from 'react'

export default class States extends Component {
  render() {
    const { handleChange } = this.props;
    const states = ['', 'Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <select className="select-box" name="state" onChange={handleChange}>
        {states.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    )
  }
}
