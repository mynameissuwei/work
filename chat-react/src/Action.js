
import * as ActionTypes from './ActionTypes.js'

const add = () => {
	return {
		type: ActionTypes.increment
	}
}


const subtract = () => {
	return {
		type:ActionTypes.decrement
	}
}

const addAsyc = ()  => {
	return (dispatch) => {
		setTimeout(
			() => {
				dispatch(add())
			},2000)
	}
}

export {add,subtract,addAsyc}
