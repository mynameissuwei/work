import axios from 'axios'
import * as ActionsTypes from './ActionTypes'
import { getRedirectPath } from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState={
	isAuth:false,
	redirectTo:'',
	msg:'',
	user:'',
	pwd:'',
	type:''
}

export const user = (state = initState,action) => {
	switch(action.type)  {
		case ActionsTypes.success :
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case ActionsTypes.Lsuccess :
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case ActionsTypes.Asuccess :
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
		case ActionsTypes.error :
			return {...state,isAuth:false,msg:action.msg}
		default:
			return state
	}
}

