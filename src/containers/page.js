import { connect } from 'react-redux'
import * as pageActions from '../actions/page'
import Page from '../components/page'

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

const mapDispatchToProps = {
  getPokemons: pageActions.getPokemons,
  filterPokemons: pageActions.filterPokemons
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
