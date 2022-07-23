import React, { Component } from 'react'

export default class InsertDataStates extends Component {

  render() {

    const { infos } = this.props;
    const { name, email, cpf, adress, city, state, home, resume, office, office_description } = infos
    
    return (
      <div>
        <h2>Dados Pessoais:</h2>
        <div>Nome:  {name}</div>
        <div>Email:  {email}</div>
        <div>CPF:  {cpf}</div>
        <div>Endereço:  {adress}</div>
        <div>Cidade:  {city}</div>
        <div>Estado:  {state}</div>
        <div>Tipo de Moradia:  {home}</div>
        <hr />
        <h2>Dados do seu último Emprego:</h2>
        <div>Resumo:  {resume}</div>
        <div>Cargo:  {office}</div>
        <div>Descrição do cargo:  {office_description}</div>
      </div>
    )
  }
}
