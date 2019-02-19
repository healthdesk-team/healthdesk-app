import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

class MedicWelcome extends PureComponent {
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
          Welcome Medic !
        </h1>
        <Button type="button" onClick={() => logout()}>
          Log me OUT
        </Button>
      </section>
    )
  }
}

MedicWelcome.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default MedicWelcome
