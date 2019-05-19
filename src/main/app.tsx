import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IRootReducer } from '../utils/interfaces'
import { Router, Switch } from 'react-router-dom'
import { history } from '../router/history'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/pageHeader/pageHeader'

require('./app.css')

class App extends React.Component<Props, State> {
	_isMounted: boolean

	componentWillMount() {
		// listen to the service-worker registration.onupdatefound event on /src/Utils/registerSW.ts.
		document.body.addEventListener('updateAvailable', () => {
			window.location.reload()
		})
	}

	componentDidMount() {
		this._isMounted = true
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	render() {
		return (
			<Router history={ history }>
				<div>
					{/*<ToastContainer />*/}
					{/*<ModalContainer />*/}
					<PageHeader text={ 'MyFewBucks' }/>
					<Switch>
						<MyRoutes />
					</Switch>
				</div>
			</Router>
		)
	}
}
const mapStateToProps = (state: IRootReducer) => ({})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(App)

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
