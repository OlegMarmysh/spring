import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import loginPageReducer from './loginPageReducer'
import thunk from 'redux-thunk'
import projectPageReducer from './projectPageReducer'

const reducers = combineReducers({
  loginPage: loginPageReducer,
  projectPage: projectPageReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunk)
))

export default store
