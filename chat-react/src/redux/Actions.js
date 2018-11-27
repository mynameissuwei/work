import * as ActionTypes from './ActionTypes.js'
import axios from 'axios'

const registerSuccess = (data) => {
	return {type:ActionTypes.Rsuccess,payload:data}
}

const LoginSuccess = (data) => {
	return {type:ActionTypes.Lsuccess,payload:data}
}

const authSuccess = (data) => {
	return {type:ActionTypes.Asuccess,payload:data}
}

const errorMsg = (msg)  => {
	return {type:ActionTypes.error,msg}
}

const register = ({user,pwd,rpwd,type}) => {
	console.log('it works')
	if(!user||!pwd||!type) {
		return errorMsg('you should input the intact data')
	} else if(pwd != rpwd) {
		return errorMsg('pwd and rpwd should be the same')
	} else {
		return dispatch => {
			axios.post('/info',{user,pwd,type}).then(res => {
				if(res.status == 200 && res.data.code == 0) {
					dispatch(registerSuccess({user,pwd,type}))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
		}
	}
}



function update(data) {
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