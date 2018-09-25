
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import LEFT_MENU from './reducers/home/left-menu'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(sagaMiddleware))

const store = createStore(
    combineReducers({
      LEFT_MENU
    }),
    {},
    enhancer
)
sagaMiddleware.run(sagas)
export default store
