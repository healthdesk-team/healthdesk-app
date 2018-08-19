import React, { PureComponent } from 'react'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { isEmpty } from 'lodash'

import getAuthRoutes from './routes'

import Home from './components/containers/home'

class App extends PureComponent {
  constructor(props) {
    super(props)
    if (!isEmpty(props.auth) && window.location.pathname === '/') window.location.href = '/welcome'
  }

  render() {
    const { store, auth } = this.props

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {getAuthRoutes(!isEmpty(auth) ? auth.user.role.name : '')}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  // eslint-disable-next-line
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line
  auth: PropTypes.object.isRequired,
}

export default connect(state => ({
  auth: state.auth,
}))(App)
