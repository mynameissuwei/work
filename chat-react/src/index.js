import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import  thunk from 'redux-thunk'
import { BrowserRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom'
//component
import Login from './components/Login/login'
import Register from './components/Register/register'
import AuthRoute from './components/AuthRoute/AuthRoute'
import Chat from './components/chat/chat'
//container
import { HumanInfo } from './container/HumanInfo/human'
import { H5NumberInputExampleWrapper } from './container/SuperHeroInfo/SuperHero'
import { DashBar } from './container/Boss/boss'
//reducer
import reducers from './reducer'
//axios intercept
import './config'
import './index.css'



const store = createStore(reducers,compose(
  applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f => f
))

  

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<AuthRoute></AuthRoute>
				<Switch>
					<Route path='/' component={Login} exact></Route>
					<Route path='/register' component={Register}></Route>
					<Route path='/geniusinfo' component={HumanInfo}></Route>
					<Route path='/bossinfo' component={H5NumberInputExampleWrapper}></Route>
					<Route path='/chat/:user' component={Chat}></Route>
					<Route component={ DashBar }></Route>
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
)

 