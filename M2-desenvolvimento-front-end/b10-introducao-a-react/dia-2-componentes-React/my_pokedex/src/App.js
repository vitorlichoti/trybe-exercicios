import data from "./data"
import Pokedex from "./components/Pokedex"
import React from "react";
import "./App.css"

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={data} />
      </div>
    );
  }
}

export default App;
