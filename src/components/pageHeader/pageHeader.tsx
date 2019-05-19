import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
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
		height: pageHeaderHeight,
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


const PageHeader: React.FC<Props> = (props) => {
	const { classes } = props
	const text = 'MyFewBucks'
	const hasNotification = true
	return (
		<div className={ classes.container }>
			<AppBar
				className={ classes.appBar }
				position='fixed'
				color='secondary'
			>
				<Toolbar className={ classes.toolbar }>
					<IconButton className={ classes.menuButton }>
						<MenuIcon />
					</IconButton>
					<Typography align='center' className={ classes.text } >
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

export interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(PageHeader)
