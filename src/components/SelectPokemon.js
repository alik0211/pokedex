import React from 'react'

const SelectPokemon = ({ pokemon }) => (
  <div className="col-sm-4 col-md-3 col-lg-2">
    <div className="thumbnail">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="Pokemon"
      />
      <div className="thumbnail-caption">
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  </div>
)

export default SelectPokemon
