import axios from 'axios'
import * as ActionsTypes from './ActionTypes'
import { getRedirectPath } from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const UserInitState = {
	isAuth:false,
	msg:'',
	user:'',
	pwd:'',
	type:'',
	redirectTo:''
}

const PersonInitState = {
	data:[]
}

const user = (state = UserInitState,action) => {
	switch(action.type)  {
		case ActionsTypes.Rsuccess :
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case ActionsTypes.Lsuccess :
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case ActionsTypes.Asuccess :
			return {...state,msg:'',redirectTo:action.payload.type,...action.payload}
		case ActionsTypes.error :
			return {...state,isAuth:false,msg:action.msg}
		default:
			return state
	}
}

const person = (state = PersonInitState,action) => {
	switch(action.type) {
		case ActionsTypes.Tsuccess :
			return {...state,data:action.payload}
		default :
			return state
	}
}

export { user,person }


