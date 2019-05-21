import * as React from 'react'
import { Router, Switch } from 'react-router-dom'
import { history } from '../router/history'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import MyRoutes from '../router/myRoutes'
import PageHeader from '../components/pageHeader/pageHeader'
import TopMenu from '../components/topMenu/topMenu'
import BottomMenu from '../components/bottomMenu/bottomMenu'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/AddRounded'
require('./app.css')


export interface Props extends WithStyles<typeof styles> {}


const styles = createStyles({
	fab: {
		position: 'absolute',
		bottom: '30px',
		right: '30px',
		zIndex: 1301,
	},
	addIcon: {
		transition: 'transform .2s ease-in-out',
	},
	clearIcon: {
		transition: 'transform .2s ease-in-out',
		transform: 'rotate(45deg)',
	},
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
				/>
				<TopMenu
					topMenuIsOpen={ topMenuIsOpen }
					setTopMenuIsOpen={ setTopMenuIsOpen }
				/>
				<BottomMenu
					bottomMenuIsOpen={ bottomMenuIsOpen }
					setBottomMenuIsOpen={ setBottomMenuIsOpen }
				/>
				<Fab
					color='primary'
					className={ classes.fab }
					onClick={ () => setBottomMenuIsOpen(!bottomMenuIsOpen) }
				>
					<AddIcon
						className={
							bottomMenuIsOpen ? classes.clearIcon : classes.addIcon
						}
					/>
				</Fab>
				<Switch>
					<MyRoutes />
				</Switch>
			</div>
		</Router>
	)
}
export default withStyles(styles)(App)
