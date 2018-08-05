import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { checkUserConnection } from './actions/auth'

import Home from './components/containers/home'

class App extends PureComponent {
  constructor(props) {
    super(props)
    // check the connexion status of the user
    props.store.dispatch(checkUserConnection())
  }

  componentWillUpdate() {
    const { store } = this.props
    // check the connexion status of the user
    store.dispatch(checkUserConnection())
  }

  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  // eslint-disable-next-line
  store: PropTypes.object.isRequired,
}

export default App
