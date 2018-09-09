import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Import Actions
import { login, logout } from '../../actions/auth'
// Import Presentational
import Home from '../presentationals/Home'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  login,
  logout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
