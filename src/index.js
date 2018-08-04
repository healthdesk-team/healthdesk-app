import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import configureStore from './store/configureStore'
// Create the store
const store = configureStore()

// eslint-disable-next-line
ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
