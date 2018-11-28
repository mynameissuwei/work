import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import  thunk from 'redux-thunk'
import { BrowserRouter,Route,Link,Switch,Redirect } from 'react-router-dom'
//component
import Login from './components/Login/login'
import Register from './components/Register/register'
import AuthRoute from './components/AuthRoute/AuthRoute'
//container
import { HumanInfo } from './container/HumanInfo/human'
import { H5NumberInputExampleWrapper } from './container/SuperHeroInfo/SuperHero'
//reducer
import reducers from './reducer'
//axios intercept
import './config'

const store = createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():() => {}
))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
          <AuthRoute></AuthRoute>
					<Route path='/login' component={Login} exact></Route>
					<Route path='/register' component={Register}></Route>
					<Route path='/HumanInfo' component={HumanInfo}></Route>
					<Route path='/SuperHeroinfo' component={H5NumberInputExampleWrapper}></Route>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

