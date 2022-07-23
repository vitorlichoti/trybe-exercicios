import React, { Component } from 'react'

export default class LastJobData extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset className="personal-data">
        <h2>Dados do último trabalho:</h2>
        <label className="resume">
          Resumo do currículo:
          <textarea
            name="resume"
            onChange={handleChange}
          />
        </label>
        <label className="office">
          Cargo:
          <textarea
            name="office"
            onChange={handleChange}
          />
        </label>
        <label className="cargo">
          Descrição do cargo:  
          <input
            type="text"
            name="office_description"
            onChange={handleChange}
          />
        </label>
      </fieldset>
    )
  }
}
