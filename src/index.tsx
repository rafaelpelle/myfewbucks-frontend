import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as promise from 'redux-promise'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RegisterSW from './utils/registerSW'
import reducers from './redux/reducers/reducers'
import App from './main/app'

const composeEnhancers = composeWithDevTools({
	// options like actionSanitizer, stateSanitizer
})
const composedWithMiddleware = composeEnhancers(
	applyMiddleware(thunk, promise),
	// other store enhancers if any
)
const store = createStore(reducers, composedWithMiddleware)

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>
	, document.getElementById('root'))

RegisterSW()
