import React, { Component } from 'react'
import Pokemon from '../components/Pokemon'
import Search from '../components/Search'

class Page extends Component {
  componentDidMount() {
    this.props.pageActions.fetchPokemons()
  }

  handleSearch(event) {
    this.props.pageActions.filterPokemons(event.target.value)
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
        <ul className="pokemons">{isFetched ? <p>Loading...</p> : pokemons}</ul>
      </div>
    )
  }
}

export default Page
