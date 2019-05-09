import React, { Component } from 'react'
import Pokemon from '../pokemon/cmp-pokemon'
import Search from '../search/cmp-search'

class Page extends Component {
  state = {
    pokemonsIds: []
  }

  componentDidMount() {
    this.props.getPokemons().then(() => {
      this.setState({
        pokemonsIds: Object.keys(this.props.collection)
      })
    })
  }

  handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim()
    const { collection } = this.props

    const pokemonsIds = Object.keys(collection).filter(pokemonId => {
      const pokemon = collection[pokemonId]

      return pokemon.name.includes(value) || value === ''
    })

    this.setState({
      pokemonsIds
    })
  }

  render() {
    const { pokemonsIds } = this.state
    const { collection, isFetched } = this.props

    const pokemons = pokemonsIds.map(pokemonId => {
      const pokemon = collection[pokemonId]

      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <div className="page">
        {/* {error && <div className="page__error">{error}</div>} */}
        <div className="page__search">
          <Search onChange={this.handleSearch} />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="pokemons">{pokemons}</ul>
        )}
      </div>
    )
  }
}

export default Page
