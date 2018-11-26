import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './views/counter.js'
import axios from 'axios'
import { store } from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter,Route,Link,Switch,Redirect } from 'react-router-dom'
import Login from './views/login/login.js'
import Register from './views/register/register.js'
import { AuthRoute } from './component/AuthRoute/AuthRoute.js'
import { SuperHero, H5NumberInputExampleWrapper } from './views/SuperHeroinfo/SuperHero'
import { HumanInfo } from './views/Human/human'
 
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
					<Route path='/HumanInfo' component={HumanInfo}></Route>
					<Route path='/SuperHeroinfo' component={H5NumberInputExampleWrapper}></Route>
					<Route path='/test' component={AuthRoute}></Route>
					<Route path='/' component={Login} exact></Route>
					<Route path='/register' component={Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)







