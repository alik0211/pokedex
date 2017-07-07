import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import Search from '../components/Search'
import SelectPokemon from '../components/SelectPokemon'
import Pokemon from '../components/Pokemon'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      offset: 0,
      selectedPokemon: 1
    }

    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleSelectedPokemon = this.handleSelectedPokemon.bind(this)
  }

  fetchPokemons() {
    this.props.pageActions.fetchPokemons(this.state.offset)
  }

  fetchSelectedPokemon() {
    this.props.pageActions.fetchSelectedPokemon(this.state.selectedPokemon)
  }

  componentDidMount() {
    this.fetchPokemons()
    this.fetchSelectedPokemon()
  }

  handleSearchTerm(e) {
    this.setState({ term: e.target.value })
  }

  handlePageChange(data) {
    this.setState({ offset: data.selected * 20 }, () => {
      this.fetchPokemons()
    })
  }

  handleSelectedPokemon(id) {
    this.setState({ selectedPokemon: id }, () => {
      this.fetchSelectedPokemon()
    })
  }

  render() {
    let { pokemons, selectedPokemon } = this.props.page
    let searchString = this.state.term.trim().toLowerCase()

    if (searchString.length > 0) {
      pokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().match(searchString)
      })
    }

    pokemons = pokemons.map((pokemon, index) => {
      pokemon.id = parseInt(pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', ''), 10)
      return (
        <Pokemon
          onClick={this.handleSelectedPokemon}
          pokemon={pokemon}
          key={index}
        />
      )
    })

    return (
      <div className="container-fluid">
        <Search onChange={this.handleSearchTerm} term={this.state.value} />
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            {
              !selectedPokemon
              ?
              <p>Loading...</p>
              :
              <SelectPokemon pokemon={selectedPokemon} />
            }
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <table className="user-list table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.page.isFetched
                  ?
                  <tr><td>Loading...</td></tr>
                  :
                  pokemons
                }
              </tbody>
            </table>
            <ReactPaginate
              pageCount={41}
              pageRangeDisplayed={3}
              marginPagesDisplayed={3}
              onPageChange={this.handlePageChange}
              containerClassName="pagination"
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
