import * as React from 'react'
import { Router, Switch } from 'react-router-dom'
import { history } from '../router/history'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/pageHeader/pageHeader'
import TopMenu from '../components/topMenu/topMenu'

require('./app.css')

const App: React.FC<Props> = (props) => {
	const [topMenuIsOpen, setTopMenuIsOpen] = React.useState<boolean>(false)

	React.useEffect(() => {
		// listen to the service-worker registration.onupdatefound event on /src/Utils/registerSW.ts.
		document.body.addEventListener('updateAvailable', () => {
			window.location.reload()
		})
	}, [])

	return (
		<Router history={ history }>
			<div>
				<TopMenu
					topMenuIsOpen={ topMenuIsOpen }
					setTopMenuIsOpen={ setTopMenuIsOpen }
				/>
				<PageHeader
					topMenuIsOpen={ topMenuIsOpen }
					setTopMenuIsOpen={ setTopMenuIsOpen }
				/>
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
