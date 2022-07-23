import React, { Component } from 'react';
import InsertDataStates from './InsertDataStates';
import LastJobData from './LastJobData';
import PersonData from './PersonData';

class Forms extends Component {
  
  state = {
    name: '',
    email: '',
    cpf: '',
    adress: '',
    city: '',
    state: '',
    home: '',
    resume: '',
    office: '',
    office_description: '',
    print: false,
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    })
  }

  printInfosButton = () => { this.setState({ print: true }) };

  render() {
    const { print } = this.state;

    return (
      <section>
        <h2 className="title">Formulário de Cadastro</h2>
        <form>
          <PersonData handleChange={this.handleChange}/>
          <LastJobData handleChange={this.handleChange}/>
        </form>
          <button>LIMPAR CAMPOS</button>
          <button onClick={this.printInfosButton}>SUBMETER INFORMAÇÕES</button>
        {print && <InsertDataStates infos={this.state}/>}
      </section>
    );
  }
}

export default Forms;
