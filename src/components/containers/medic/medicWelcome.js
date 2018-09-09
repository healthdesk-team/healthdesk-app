import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Import Actions
import { logout } from '../../../actions/auth'
// Import Presentational
import MedicWelcome from '../../presentationals/medic/MedicWelcome'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  logout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicWelcome))
