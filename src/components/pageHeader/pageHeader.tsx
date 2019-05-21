import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { IHandleTopMenu } from '../../utils/interfaces'
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
		padding: '0px 20px',
	},
	text: {
		flexGrow: 1,
		letterSpacing: '2px',
		fontWeight: 600,
		fontSize: '15px',
	},
	menuButton: {
		padding: 0,
	},
	notificationButton: {
		padding: 0,
	},
})

export interface Props extends WithStyles<typeof styles> {
	topMenuIsOpen: boolean
	setTopMenuIsOpen: IHandleTopMenu
}

const PageHeader: React.FC<Props> = (props) => {
	const { classes, topMenuIsOpen, setTopMenuIsOpen } = props
	const text = 'MyFewBucks'
	const hasNotification = false

	return (
		<div className={ classes.container }>
			<AppBar
				className={ classes.appBar }
				position='fixed'
				color='secondary'
			>
				<Toolbar className={ classes.toolbar }>
					<IconButton
						className={ classes.menuButton }
						onClick={ () => setTopMenuIsOpen(!topMenuIsOpen) }
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
