
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import HOME from './reducers/home'
import DETAIL from './reducers/detail'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(sagaMiddleware))

const store = createStore(
    combineReducers({
      HOME,
      DETAIL
    }),
    {},
    enhancer
)
sagaMiddleware.run(sagas)
export default store
