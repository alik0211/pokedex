import { connect } from 'react-redux'
import { getPokemons } from '../../actions/pokemons'
import Page from './cmp-page'

function mapStateToProps(state) {
  const pokemonsById = state.pokemons.byId

  return {
    pokemonsById
  }
}

const mapDispatchToProps = {
  getPokemons
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
