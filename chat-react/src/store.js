import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from './reducer.js'

const devTools = window.devToolsExtension

const store  = createStore(reducer,compose(
		applyMiddleware(thunk),
		devTools()
	)
)

export {store}

