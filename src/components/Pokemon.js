import React from 'react'

const Pokemon = ({ pokemon }) => (
  <tr>
    <td>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="Pokemon"
      />
    </td>
    <td>{pokemon.name}</td>
  </tr>
)

export default Pokemon
