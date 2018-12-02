import { combineReducers } from 'redux'
import { user,person } from './redux/user-redux'

const reducers = combineReducers({ user,person })

export default reducers