import { combineReducers } from 'redux'
import { user,person,chat } from './redux/user-redux'

const reducers = combineReducers({ user,person,chat })

export default reducers