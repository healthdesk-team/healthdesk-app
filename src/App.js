import React, { PureComponent } from 'react'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { isEmpty } from 'lodash'

import { checkUserConnection } from './actions/auth'
import getAuthRoutes from './routes'

import Home from './components/containers/home'

class App extends PureComponent {
  constructor(props) {
    super(props)
    // check the connexion status of the user
    props.store.dispatch(checkUserConnection())
  }

  render() {
    const { store, auth } = this.props

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {getAuthRoutes(!isEmpty(auth) ? auth.role : {})}
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
