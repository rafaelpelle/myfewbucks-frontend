import * as React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as ReactDOM from 'react-dom'
import RegisterSW from './utils/registerSW'
import App from './main/app'
import reducers from './redux/reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as promise from 'redux-promise'

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
