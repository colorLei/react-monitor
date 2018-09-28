
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import HOME from './reducers/home'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(sagaMiddleware))

const store = createStore(
    combineReducers({
      HOME
    }),
    {},
    enhancer
)
sagaMiddleware.run(sagas)
export default store
