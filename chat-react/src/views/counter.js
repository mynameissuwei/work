import React from 'react'
import * as Actions from '../Action.js'
import {store} from '../store.js'
import {connect} from 'react-redux'

// class Counter extends React.Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = this.getOwnState()
// 		this.onChange = this.onChange.bind(this)

// 	}

// 	// getOwnState() {
// 	// 	return {
// 	// 		value:store.getState()
// 	// 	}
// 	// }

// 	// onChange() {
// 	// 	this.setState(this.getOwnState)
// 	// }

// 	// componentDidMount() {
// 	// 	store.subscribe(this.onChange)
// 	// }

// 	// componentWillUnmount() {
// 	// 	store.unsubscribe(this.onChange)
// 	// }

// 	// onIncrement() {
// 	// 	store.dispatch(Actions.add())
// 	// }

// 	// onDecrement() {
// 	// 	store.dispatch(Actions.subtract())
// 	// }

// 	// onIncrementAsyc() {
// 	// 	store.dispatch(Actions.addAsyc())
// 	// }


// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.state.value}</h1>
// 				<button onClick={this.onIncrement}>+</button>
// 				<button onClick={this.onDecrement}>-</button>
// 				<button onClick={this.onIncrementAsyc}>add</button>
// 			</div>
// 		)
// 	}
// }

function Counter({value,onIncrement,onDecrement}) {
	return(
		<div>
			count:{value}
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		value:state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => {
			dispatch(Actions.add())
		},
		onDecrement: () => {
			dispatch(Actions.subtract())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)