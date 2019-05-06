import React, { Component } from 'react'
import Pokemon from '../pokemon/cmp-pokemon'
import Search from '../search/cmp-search'

class Page extends Component {
  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    console.log('event.currentTarget.value:', event.currentTarget.value)
  }

  render() {
    let { collection, isFetched } = this.props

    let pokemons = Object.values(collection).map(pokemon => {
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
          <Search onChange={this.handleSearch.bind(this)} />
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
