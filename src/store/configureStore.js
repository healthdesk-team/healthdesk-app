import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/rootReducer'

const middlewares = process.env.NODE_ENV === 'production' ? applyMiddleware() : applyMiddleware(createLogger())

export default function configureStore(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    middlewares,
  )
}
