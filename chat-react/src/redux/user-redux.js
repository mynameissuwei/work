import axios from 'axios'
import * as ActionsTypes from './ActionTypes'
import { getRedirectPath } from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState={
	isAuth:false,
	msg:'',
	user:'',
	pwd:'',
	type:''
}

export const user = (state = initState,action) => {
	switch(action.type)  {
		case ActionsTypes.Rsuccess :
			return {...state,msg:'',isAuth:true,...action.payload}
		case ActionsTypes.Lsuccess :
			return {...state,msg:'',isAuth:true,...action.payload}
		case ActionsTypes.Asuccess :
			return {...state,msg:'',...action.payload}
		case ActionsTypes.error :
			return {...state,isAuth:false,msg:action.msg}
		default:
			return state
	}
}

