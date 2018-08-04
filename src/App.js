import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        this is the home page
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  // eslint-disable-next-line
  store: PropTypes.object.isRequired,
}

export default App
