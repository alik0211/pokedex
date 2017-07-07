import React from 'react'

const Pokemon = ({
  onClick,
  pokemon
}) => (
  <tr onClick={() => onClick(pokemon.id)}>
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
