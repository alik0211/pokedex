import { connect } from 'react-redux'
import { getPokemons } from '../../actions/pokemons'
import Page from './cmp-page'

function mapStateToProps(state) {
  const { byId: pokemonsById, allIds: pokemonsAllIds } = state.pokemons

  return {
    pokemonsById,
    pokemonsAllIds
  }
}

const mapDispatchToProps = {
  getPokemons
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
