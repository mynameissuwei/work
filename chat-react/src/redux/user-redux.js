import axios from 'axios'
import * as ActionsTypes from './ActionTypes'
import { getRedirectPath,getSkip } from '../util'
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

const ChatInitState = {
	chatMsg:[],
	unread:0,
	users:{}
}

const user = (state = UserInitState,action) => {
	switch(action.type)  {
		case ActionsTypes.Rsuccess :
			return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
		case ActionsTypes.Lsuccess :
			return {...state,msg:'',redirectTo:getSkip(action.payload),isAuth:true,...action.payload}
		case ActionsTypes.Asuccess :
			return {...state,msg:'',redirectTo:action.payload.type,...action.payload}
		case ActionsTypes.Xsuccess :
			return {...state,...action.payload}
		case ActionsTypes.Fsuccess :
			return {...state,redirectTo:'/'}
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

const chat = (state = ChatInitState,action) => {
	switch(action.type) {
		case ActionsTypes.msgList:
			return {...state,users:action.payload.users,chatMsg:action.payload.msgs,unread:action.payload.msgs.filter(v => !v.read && v.to===action.payload.userId).length}
		case ActionsTypes.recSuccess:
			return {...state,chatMsg:[...state.chatMsg,action.payload],unread:state.unread+1}
		default:
			return state
	}
}

export { user,person,chat }


