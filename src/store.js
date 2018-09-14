
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import home from './reducers/home'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(sagaMiddleware))

const store = createStore(
    combineReducers({home}),
    {},
    enhancer
)
sagaMiddleware.run(sagas)
export default store
