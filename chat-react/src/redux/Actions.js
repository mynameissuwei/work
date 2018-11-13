import * as ActionTypes from './ActionTypes.js'
import axios from 'axios'

function registerSuccess(data) {
	return {type:ActionTypes.success,payload:data}
}

function LoginSuccess(data) {
	return {type:ActionTypes.Lsuccess,payload:data}
}

function authSuccess(data){
	return {type:ActionTypes.Asuccess,payload:data}
}

function errorMsg(msg) {
	return {msg,type:ActionTypes.error}
}



function register({user,pwd,rpwd,type}) {
	if(!user||!pwd||!type) {
		return errorMsg('complete information')
	}
	if(pwd!==rpwd) {
		return errorMsg('confirm your password')
	}
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type})
			.then(res=>{
				if(res.status==200&&res.data.code==0) {
					dispatch(registerSuccess({user,pwd,type}))
				}else{
					dispatch(errorMsg(res.data.msg))
				}
		})
	}
}

function update({job,}) {
	return dispatch => {
		axios.post('/user/update',data).then(res=>{
			if(res.status==200&&res.data.code==0) {
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}

function login({user,pwd}) {
	if(!user||!pwd) {
		return errorMsg('complete information')
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd})
			.then(res=>{
				if(res.status==200&&res.data.code==0) {
					dispatch(LoginSuccess(res.data.data))
				}else{
					dispatch(errorMsg(res.data.msg))
				}
		})
	}
}

export { register,login,update }