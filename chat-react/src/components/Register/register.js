import React,{ Component } from 'react'
import { LogoSpider	} from '../logoImage/logoimg'
import { List,InputItem,Button,WhiteSpace,WingBlank,Radio } from 'antd-mobile' 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/Actions.js'

@connect((state) => state.user,
	{register})

class Register extends Component{

	constructor(props) { 
		super(props)
		this.state = {
			user:'',
			pwd:'',
			rpwd:'',
			type:'Human'
		} 
	}

	handleRegister() {
		this.props.register(this.state)
	}

	handleChange(key,value){
		this.setState({
			[key]:value
		})
	}


	render() {
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
				<LogoSpider></LogoSpider>
				<WingBlank>
					<List>
						{this.props.msg?<p className='middle'>{this.props.msg}</p>:null}
						<InputItem placeholder='username' onChange={(v)=>this.handleChange('user',v)}>username</InputItem>
						<WhiteSpace/>
						<InputItem placeholder='password' onChange={(v)=>this.handleChange('pwd',v)}>password</InputItem>
						<WhiteSpace/>
						<InputItem placeholder='confirm' onChange={(v)=>this.handleChange('rpwd',v)}>confirm</InputItem>
						<WhiteSpace/>
						<RadioItem checked={this.state.type == 'Human'} onChange={()=>this.handleChange('type','Human')}>Human</RadioItem>
						<WhiteSpace/>
						<RadioItem checked={this.state.type == 'SuperHero'} onChange={()=>this.handleChange('type','SuperHero')}>SuperHero</RadioItem>
						<WhiteSpace/>
						<Button type='primary' onClick={() => this.handleRegister()}>submit</Button>
					</List>
				</WingBlank>
			</div>
		)
	}

}

export default Register 