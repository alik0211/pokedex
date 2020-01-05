import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
import Search from '../components/search'

class Page extends Component {
  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <div className="col-lg-3" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </div>
      )
    })

    return (
      <div>
        <div
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="/" className="navbar-brand">
                <img src="logo.png" alt="logo" />
                Pokédex  
              </a>
            </div>
            <Search onChange={this.handleSearch.bind(this)} />
          </div>
        </div>
        <div className="container-fluid" style={{ marginTop: '5em' }}>
          {error && <div className="page__error">{error}</div>}
          <div className="page__search" />
          {isFetched ? (
            <p>Loading, please wait...</p>
          ) : (
            <div className="col-lg-12">{pokemons}</div>
          )}
        </div>
      </div>
    )
  }
}

export default Page
