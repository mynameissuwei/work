import React,{ Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends Component {

	constructor() {
		super()
	}

	componentDidMount() {
		const link = ['/login','/register']
		if(link.includes(this.props.location.pathname)) {
			return 
		}
		axios.get('/user/info').then(res => {
			if(res.status == 200) {
				if(res.data.code == 0) {
					
				} else {
					this.props.history.push('/login')
				}
			}
		})
	}

	render() {
		return null
	}

} 

export default AuthRoute 