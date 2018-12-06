import * as ActionTypes from './ActionTypes.js'
import axios from 'axios'
import io from 'socket.io-client';

const socket = io('ws://localhost:8090')

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
	if(!user||!pwd||!type) {
		return errorMsg('you should input the intact data')
	} else if(pwd != rpwd) {
		return errorMsg('pwd and rpwd should be the same')
	} else {
		return dispatch => {
			axios.post('/user/register',{user,pwd,type}).then(res => {
				if(res.status == 200 && res.data.code == 0) {
					dispatch(registerSuccess({user,pwd,type}))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
		}
	}
}

const update = (data) => {
	return dispatch => {
		axios.post('/user/update',data).then(res => {
			if(res.status==200&&res.data.code==0) {
				console.log(res.data.data)
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}

const login = ({user,pwd}) => {
	if(!user||!pwd) {
		return errorMsg('complete information')
	}
	return dispatch => {
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

const tochSuccess = (data) => {
	return {type:ActionTypes.Tsuccess,payload:data}
}

const loadData = (data) => {
	return {type:ActionTypes.Xsuccess,payload:data}
}

const logoutSuccess = () => {
	return {type:ActionTypes.Fsuccess}
}

//chat-msg 

const msgList = (msgs,users,userId) => {
	return {type:ActionTypes.msgList,payload:{msgs,users,userId}}
}
 
const getMsgList = () => {
	return (dispatch,getState) => {
		axios.get('/user/msgList').then(res => {
			const userId = getState().user._id
			console.log(userId)
			dispatch(msgList(res.data.chatMsg,res.data.users,userId))
		})
	}
}

//getMsgList

//sendMsg

const sendMsg = ({from,to,msg}) => {
	return dispatch => {
		socket.emit('sendMsg',{from,to,msg})
	}
} 

const receiving = (data) => {
	return {type:ActionTypes.recSuccess,payload:data}
}

const recMsg = () => {
	return dispatch => {
		socket.on('recMsg',(data) => {
		  dispatch(receiving(data))
		})
	}
}

//sendMsg

export { register,login,update,tochSuccess,loadData,logoutSuccess }
export { getMsgList,sendMsg,recMsg }

