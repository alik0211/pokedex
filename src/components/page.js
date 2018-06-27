import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
import Search from '../components/search'

class Page extends Component {
  componentDidMount() {
    this.props.fetchPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  render() {
    let { displayedPokemons, isFetched } = this.props.page

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <div className="page">
        <Search onChange={this.handleSearch.bind(this)} />
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
