import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class AdminWelcome extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { logout } = this.props
    return (
      <section>
        <h1>
          Welcome awesome Admin !
        </h1>
        <Button type="button" onClick={() => logout()}>
          Log me OUT
        </Button>
      </section>
    )
  }
}

AdminWelcome.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default AdminWelcome
