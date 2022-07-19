import React from 'react';
import './App.css';

const compromissos = ['Fazer Exercícios do dia 10.1', 'Estudar o Dia 2 de React', 'Participar das Mentorias de Softskills'];

const task = (value) => {
  return (
    <li key={value} >{value}</li>
  );
}

class App extends React.Component {  
  render() {
    return (
      <ul>
        Meus compromissos:
        { compromissos.map((compromisso) => task(compromisso)) }
      </ul>
    );
  }
}

export default App;
