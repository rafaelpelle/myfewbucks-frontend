import * as React from 'react'
import { history } from '../../router/history'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import HomeRounded from '@material-ui/icons/HomeRounded'
import AttachMoneyRounded from '@material-ui/icons/AttachMoneyRounded'
import AlarmRounded from '@material-ui/icons/AlarmRounded'
import AccountBalanceRounded from '@material-ui/icons/AccountBalanceRounded'
import SettingsRounded from '@material-ui/icons/SettingsRounded'
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded'
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded'


const styles = createStyles({
	container: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		padding: '15px 0px',
	},
	font: {
		fontWeight: 600,
		fontSize: '14px',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		marginLeft: '15px',
		marginRight: '15px',
	},
	rightArrow: {
		marginLeft: 'auto',
	},
})

export type IconOptionsType =
	'home' | 'transaction' | 'reminder' | 'account' | 'settings' | 'logout'

export interface Props extends WithStyles<typeof styles> {
	text: string
	icon: IconOptionsType
	handleCloseMenu: () => void
}

const TopMenuItem: React.FC<Props> = (props) => {
	const { classes, text, icon, handleCloseMenu } = props

	function handleClick() {
		history.push('all-' + icon)
		handleCloseMenu()
	}

	return (
		<div className={ classes.container } onClick={ handleClick }>
			{ icons[icon] }
			<Typography className={ classes.font }>
				{ text }
			</Typography>
			<KeyboardArrowRightRounded className={ classes.rightArrow } />
		</div>
	)
}
export default withStyles(styles)(TopMenuItem)


const iconStyle = {
	height: 'auto',
	width: '22px',
}
const icons: any = {
	home: <HomeRounded style={ iconStyle } />,
	transaction: <AttachMoneyRounded style={ iconStyle } />,
	reminder: <AlarmRounded style={ iconStyle } />,
	account: <AccountBalanceRounded style={ iconStyle } />,
	settings: <SettingsRounded style={ iconStyle } />,
	logout: <ExitToAppRounded style={ iconStyle } />,
}
