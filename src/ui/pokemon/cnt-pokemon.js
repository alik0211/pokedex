import { connect } from 'react-redux'

import Pokemon from './cmp-pokemon'

const mapStateToProps = state => {
  const pokemonsById = state.pokemons.byId

  return {
    pokemonsById
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon)
