import React,{ Component } from 'react'
import batman from './batman.jpg'
import spider from './spider.png'
import './logoCSS.css'

class LogoBatman extends Component {

	render() {
		return ( 
			<div className="logo-container">
				<img src={batman} alt=""/>
			</div>
		)
	}

}

class LogoSpider extends Component {

	render() {
		return ( 
			<div className="logo-container">
				<img src={spider} alt=""/>
			</div>
		)
	}	

}

export {LogoBatman,LogoSpider}