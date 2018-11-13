import { combineReducers } from 'redux'
import { user } from './redux/user-redux.js'

const reducer = combineReducers({user})
export { reducer }