import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import Page from '../components/Page'

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

export default connect(mapStateToProps, mapDispatchToProps)(Page)
