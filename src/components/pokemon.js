import React from 'react'

const Pokemon = ({ pokemon }) => (
  <div className="pokemon">
    <button
      type="button"
      className="pokemon__sprite"
      style={{
        backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon.id
        }.png`})`
      }}
    />
    <p className="pokemon__name">{pokemon.name}</p>
  </div>
)

export default Pokemon
