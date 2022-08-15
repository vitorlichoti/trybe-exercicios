import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/contact">Contato</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/about">Sobre Mim</Link>
        </header>
        <h1 className="App-header">Home Page</h1>
        <p>Esta é a página inicial</p>
      </div>
    );
  }
}

export default Home;
