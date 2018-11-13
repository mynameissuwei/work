import React,{ Component } from 'react'
import axios from 'axios'

class AuthRoute extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
		axios.get('/user/info').then((res) => console.log(res.data))
	}

	render() {
		return <h1>it works</h1>
	}
} 

export { AuthRoute }