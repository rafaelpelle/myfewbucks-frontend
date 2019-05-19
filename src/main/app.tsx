import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IRootReducer } from '../utils/interfaces'
import { Router, Switch } from 'react-router-dom'
import { history } from '../router/history'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/pageHeader/pageHeader'

require('./app.css')

const App: React.FC<Props> = (props) => {
	React.useEffect(() => {
		// listen to the service-worker registration.onupdatefound event on /src/Utils/registerSW.ts.
		document.body.addEventListener('updateAvailable', () => {
			// alert('Update available')
			window.location.reload()
		})
	}, [])

	return (
		<Router history={ history }>
			<div>
				{/*<ToastContainer />*/}
				{/*<ModalContainer />*/}
				<PageHeader />
				<Switch>
					<MyRoutes />
				</Switch>
			</div>
		</Router>
	)
}

export default App
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
