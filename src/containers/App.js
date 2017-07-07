import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import Search from '../components/Search'
import Pokemon from '../components/Pokemon'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      offset: 0
    }

    this.changeSearchTerm = this.changeSearchTerm.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  fetchPokemons() {
    this.props.pageActions.fetchPokemons(this.state.offset)
  }

  componentDidMount() {
    this.fetchPokemons()
  }

  changeSearchTerm(e) {
    this.setState({ term: e.target.value })
  }

  handlePageChange(data) {
    this.setState({ offset: data.selected * 20 }, () => {
      this.fetchPokemons()
    })
  }

  render() {
    let { pokemons } = this.props.page
    let searchString = this.state.term.trim().toLowerCase()

    if (searchString.length > 0) {
      pokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().match(searchString)
      })
    }

    pokemons = pokemons.map((pokemon, index) => {
      pokemon.id = parseInt(pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', ''), 10)
      return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
      <div className="container-fluid">
        <Search onChange={this.changeSearchTerm} term={this.state.value} />
        <div className="row">
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
                  <tr><td>Загрузка...</td></tr>
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
