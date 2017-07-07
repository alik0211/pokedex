import React from 'react'

const SelectPokemon = ({ pokemon }) => (
    <div className="thumbnail">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="thumbnail-caption">
        <h3>{pokemon.name}</h3>
      </div>
      <table className="user-info table table-responsive">
        <tbody>
          <tr><td>height</td><td>{pokemon.height}</td></tr>
          <tr><td>weight</td><td>{pokemon.weight}</td></tr>
          <tr><td>base exp</td><td>{pokemon.base_experience}</td></tr>
        </tbody>
      </table>
      <table className="user-info table table-responsive">
        <tbody>
          {pokemon.stats.map(({ stat, base_stat }, index) => {
            return (
              <tr key={index}>
                <td>{stat.name}</td>
                <td>{base_stat}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
)

export default SelectPokemon
