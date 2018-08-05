import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Import Actions
import { logout } from '../../../actions/auth'
// Import Presentational
import AdminWelcome from '../../presentationals/admin/AdminWelcome'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  logout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminWelcome))
