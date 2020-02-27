import React, { Component } from 'react'
import hardtack from 'hardtack'
import Pokemon from '../pokemon/cnt-pokemon'
import Search from '../search/cmp-search'
import ga from '../../utils/ga'

class Page extends Component {
  state = {
    searchString: '',
    pokemonsIds: [],
    error: null
  }

  componentDidMount() {
    this.props.getPokemons().then(action => {
      if (action.error) {
        return this.setState({
          error: action.payload.message
        })
      }

      const searchString = hardtack.get('searchString')
      const { pokemonsById, pokemonsAllIds } = this.props

      if (!searchString) {
        return this.setState({
          pokemonsIds: pokemonsAllIds
        })
      }

      const pokemonsIds = pokemonsAllIds.filter(pokemonId => {
        const pokemon = pokemonsById[pokemonId]

        return pokemon.name.includes(searchString)
      })

      this.setState({
        pokemonsIds,
        searchString
      })
    })

    ga.pageview(window.location.pathname + window.location.search)
  }

  handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim()
    const { pokemonsById, pokemonsAllIds } = this.props

    hardtack.set('searchString', value, {
      maxAge: '31536000'
    })

    if (value === '') {
      return this.setState({
        pokemonsIds: pokemonsAllIds,
        searchString: value
      })
    }

    const pokemonsIds = pokemonsAllIds.filter(pokemonId => {
      const pokemon = pokemonsById[pokemonId]

      return pokemon.name.includes(value)
    })

    this.setState({
      pokemonsIds,
      searchString: value
    })
  }

  render() {
    const { searchString, pokemonsIds, error } = this.state
    const { isFetched } = this.props

    const pokemons = pokemonsIds.map(pokemonId => {
      return (
        <li className="pokemons__item" key={pokemonId}>
          <Pokemon id={pokemonId} />
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search onChange={this.handleSearch} value={searchString} />
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
