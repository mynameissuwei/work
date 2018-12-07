import {PropTypes,Component} from 'redux'

const createStore = (reducer) => {

	let state 

	let listener = []

	const getState = () => state

	const dispatch = (action)  =>  {
		state = reducer(state,action)
		listener.forEach((listen) => listen())
	}

	const subscribe = (listen) => {
		listener.push(listen)
		return () => {
			return listener = listener.filter(item => item !== listen)
		}
	}

	dispatch({})

	return {
		getState,
		dispatch,
		subscribe
	}
}


const reducer = (state = 0,action) => {
	switch (action.type) {
		case 'INCREMENT' :
			return state + 1
		case 'DECREMENT' :
			return state - 1
		default:
			return state
	}
}


// if you want to change the array , avoid mutation , use slice  ...operator concat to change remove add 
// array items

class provider extends Component {

	getChildContent() {
		return {
			type:this.props.store
		}
	}

	render() {
		return this.props.children
	}

}

provider.childContentTypes = {
	store:PropTypes.object
}


connect(mapStateToProps,mapDispatchToProps)

function mapStateToProps(state,ownProps) {
	return {
		value:state[ownProps.caption]
	}
}

const createStore = (reducer) => {
	const state
	const listener = []
	
	const getState = () => state

	const subscribe = (param) => {
		listener.push(param)
	}

	const dispatch = (action) => {
		listener.forEach(v => v())
		reducer(state,action)
		return action
	}

	dispatch({})

	return {getState,subscribe,dispatch}

}


1.代码文件的组织结构； 
2.确定模块的边界； D
3.Store 的状态树设计。
	-一个模块控制一个状态节点
	-避免多余的数据
	-树形结构扁平




