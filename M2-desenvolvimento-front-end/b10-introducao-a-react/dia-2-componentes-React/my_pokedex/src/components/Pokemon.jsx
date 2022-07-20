import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return (
      <div className="pokemon">
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`} 
        </p>
        <img src={image} alt={name}></img>
      </div>
    );
  }
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};