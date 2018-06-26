import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import Page from '../components/Page'

function mapStateToProps(state) {
  return {
    page: state.page
  }
}

const mapDispatchToProps = {
  fetchPokemons: pageActions.fetchPokemons,
  filterPokemons: pageActions.filterPokemons,
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
