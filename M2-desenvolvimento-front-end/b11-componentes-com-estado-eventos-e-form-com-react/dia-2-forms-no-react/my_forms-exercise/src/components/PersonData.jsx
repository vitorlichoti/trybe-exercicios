import React, { Component } from 'react'
import States from './States'

export default class PersonData extends Component {
  render() {

    const { handleChange } = this.props;

    return (
      <fieldset className="personal-data">
        <h2>Dados Pessoais</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </label>
        <label>
          CPF:
          <input
            type="number"
            name="cpf"
            id="cpf"
            onChange={handleChange}
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="adress"
            id="adress"
            onChange={handleChange}
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="city"
            id="city"
            onChange={handleChange}
          />
        </label>
        <label>
          Estado:
          <States handleChange={handleChange}/>
        </label>
        <div className='radio-btn'>
          <label className='radio-btn home'>
            Casa:
            <input
              className='radio-btn home'
              type="radio"
              name="home"
              id="house"
              value="Casa"
              onChange={handleChange}
            />
          </label>
          <label className='radio-btn apartment'>
            Apartamento:
            <input
              className='radio-btn apartment'
              type="radio"
              name="home"
              id="apartment"
              value="Apartamento"
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>
    )
  }
}
