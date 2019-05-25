import * as React from 'react'
import { Router, Switch } from 'react-router-dom'
import { history } from '../router/history'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/pageHeader/pageHeader'
import TopMenu from '../components/topMenu/topMenu'
import BottomMenu from '../components/bottomMenu/bottomMenu'
import FloatingAddButton from '../components/floatingAddButton/floatingAddButton'
require('./app.css')


export interface Props extends WithStyles<typeof styles> {}


const styles = createStyles({
	class1: {},
})


const App: React.FC<Props> = (props) => {
	const { classes } = props
	const [topMenuIsOpen, setTopMenuIsOpen] = React.useState<boolean>(false)
	const [bottomMenuIsOpen, setBottomMenuIsOpen] = React.useState<boolean>(false)

	React.useEffect(() => {
		// listen to the service-worker registration.onupdatefound
		// event on /src/Utils/registerSW.ts.
		document.body.addEventListener('updateAvailable', () => {
			window.location.reload()
		})
	}, [])

	return (
		<Router history={ history }>
			<div>
				<PageHeader
					topMenuIsOpen={ topMenuIsOpen }
					setTopMenuIsOpen={ setTopMenuIsOpen }
					setBottomMenuIsOpen={ setBottomMenuIsOpen }
				/>
				<TopMenu
					topMenuIsOpen={ topMenuIsOpen }
					setTopMenuIsOpen={ setTopMenuIsOpen }
				/>
				<BottomMenu
					bottomMenuIsOpen={ bottomMenuIsOpen }
					setBottomMenuIsOpen={ setBottomMenuIsOpen }
				/>
				<FloatingAddButton
					bottomMenuIsOpen={ bottomMenuIsOpen }
					setBottomMenuIsOpen={ setBottomMenuIsOpen }
					setTopMenuIsOpen={ setTopMenuIsOpen }
				/>
				<Switch>
					<MyRoutes />
				</Switch>
			</div>
		</Router>
	)
}
export default withStyles(styles)(App)
