import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: '',
    }
  }

  render() {
    const { login, logout } = this.props
    const { userEmail, userPassword } = this.state
    return (
      <Form onSubmit={() => login(userEmail, userPassword)}>
        <Form.Input
          type="email"
          placeholder="email"
          label="Email"
          onChange={e => this.setState({ userEmail: e.target.value })}
          error
        />
        <Form.Input
          type="password"
          placeholder="password"
          label="Password"
          onChange={e => this.setState({ userPassword: e.target.value })}
          error
        />
        <Button type="submit">
          Log me IN
        </Button>
        <Button type="button" onClick={() => logout()}>
          Log me OUT
        </Button>
      </Form>
    )
  }
}

Home.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Home
