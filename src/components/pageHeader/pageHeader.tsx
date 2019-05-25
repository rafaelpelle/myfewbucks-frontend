import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { ISetTopMenuIsOpen, ISetBottomMenuIsOpen } from '../../utils/interfaces'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificatiosActiveIcon from '@material-ui/icons/NotificationsActiveRounded'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNoneRounded'
import { pageHeaderHeight } from '../../utils/theme'

const styles = createStyles({
	container: {
		flexGrow: 1,
	},
	appBar: {
		// The TopMenu has z-index: 1300
		zIndex: 1301,
		height: pageHeaderHeight,
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
	},
	toolbar: {
		height: pageHeaderHeight,
		padding: 0,
	},
	text: {
		flexGrow: 1,
		letterSpacing: '2px',
		fontWeight: 600,
		fontSize: '15px',
	},
	menuButton: {
		padding: '20px',
	},
	notificationButton: {
		padding: '20px',
	},
})

export interface Props extends WithStyles<typeof styles> {
	topMenuIsOpen: boolean
	setTopMenuIsOpen: ISetTopMenuIsOpen
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}

const PageHeader: React.FC<Props> = (props) => {
	const { classes, topMenuIsOpen, setTopMenuIsOpen, setBottomMenuIsOpen} = props
	const text = 'MyFewBucks'
	const hasNotification = false

	function handleMenuClick() {
		setTopMenuIsOpen(!topMenuIsOpen)
		setBottomMenuIsOpen(false)
	}

	return (
		<div className={ classes.container }>
			<AppBar className={ classes.appBar } position='fixed' color='secondary'>
				<Toolbar className={ classes.toolbar }>
					<IconButton
						className={ classes.menuButton }
						onClick={ handleMenuClick }
					>
						<MenuIcon />
					</IconButton>
					<Typography align='center' className={ classes.text }>
						{ text }
					</Typography>
					<IconButton className={ classes.notificationButton }>
						{ hasNotification ? <NotificatiosActiveIcon /> : <NotificationsNoneIcon /> }
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default withStyles(styles)(PageHeader)
