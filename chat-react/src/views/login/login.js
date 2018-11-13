import React,{ Component } from 'react'
import { LogoBatman } from '../../component/logoimg.js'
import { WingBlank,WhiteSpace,List,InputItem,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/Actions'

@connect(store => store.user,{ login })

class Login extends Component {
	constructor() {
		super(...arguments)
		this.onChange = this.onChange.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
		this.state = {
			username:'',
			pwd:''
		}
	}

	onChange() {
		this.props.history.push('/register')
	}

	handleChange(key,value) {
		this.setState({
			[key]:value
		})
	}

	handleLogin() {
		this.props.login(this.state)
	}

	render() {
		return (
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
				<LogoBatman></LogoBatman>
				<WingBlank size='lg'>
					<List>
						{this.props.msg?<p className='middle'>{this.props.msg}</p>:null}
						<InputItem placeholder='username' onChange={ (v) => this.handleChange('user',v) }>username</InputItem>
						<WhiteSpace/>
						<InputItem placeholder='password' onChange={ (v) => this.handleChange('pwd',v) }>password</InputItem>
						<WhiteSpace/>
						<Button type='primary' onClick={this.handleLogin}>LogIn</Button>
						<WhiteSpace/>
						<Button type='primary' onClick={this.onChange}>register</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}

export default Login