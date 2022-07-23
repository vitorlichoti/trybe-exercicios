import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(arg) {
    if (arg === 1) {
      this.setState(({ numeroDeCliques1 }) => ({
        numeroDeCliques1: numeroDeCliques1 + 1,
      }), () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.numeroDeCliques1)}`);
      });
    }
    if (arg === 2) {
      this.setState(({ numeroDeCliques2 }) => ({
        numeroDeCliques2: numeroDeCliques2 + 1,
      }), () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.numeroDeCliques2)}`);
      });
    }
    if (arg === 3) {
      this.setState(({ numeroDeCliques3 }) => ({
        numeroDeCliques3: numeroDeCliques3 + 1,
      }), () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.numeroDeCliques3)}`);
      });
    }
  }

  getButtonColor(num) {
    return num > 0 && num % 2 === 0 ? 'green' : 'white' 
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state
    return (
      <div>
        <button 
          onClick={() => this.handleClick(1)}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques1) }}
        >{this.state.numeroDeCliques1}
        </button>
        <button 
          onClick={() => this.handleClick(2)}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques2) }}
        >{this.state.numeroDeCliques2}
        </button>
        <button 
          onClick={() => this.handleClick(3)}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques3) }}
        >{this.state.numeroDeCliques3}
        </button>
      </div>
    );
  }
}

export default App;
