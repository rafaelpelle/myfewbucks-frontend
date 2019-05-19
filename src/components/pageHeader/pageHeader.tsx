import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationIcon from '@material-ui/icons/Notifications'
import NotificationOutlineIcon from '@material-ui/icons/NotificationsNoneOutlined'

const styles = createStyles({
	container: {
		flexGrow: 1,
	},
	bar: {
		height: '75px',
		backgroundColor: '#f3f3f3',
	},
	grow: {
		flexGrow: 1,
	},
	text: {
		flexGrow: 1,
		letterSpacing: '2px',
		fontWeight: 600,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	notificationButton: {
		marginLeft: 20,
		marginRight: -12,
	},
})

const PageHeader: React.FC<Props> = (props) => {
	const { classes, text } = props
	const hasNotification = true
	return (
		<div className={ classes.container }>
			<AppBar className={ classes.bar } position='static'>
				<Toolbar className={ classes.bar }>
					<IconButton
						className={ classes.menuButton }
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						align='center'
						className={ classes.text }
					>
						{ text }
					</Typography>
					<IconButton
						className={ classes.notificationButton }
					>
						{ hasNotification ? <NotificationIcon /> : <NotificationOutlineIcon /> }
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export interface Props extends WithStyles<typeof styles> {
	text: string,
}

export default withStyles(styles)(PageHeader)
