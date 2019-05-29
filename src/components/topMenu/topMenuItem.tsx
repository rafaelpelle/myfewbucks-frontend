import * as React from 'react'
import { history } from '../../router/history'
import Typography from '@material-ui/core/Typography'
import HomeRounded from '@material-ui/icons/HomeRounded'
import AttachMoneyRounded from '@material-ui/icons/AttachMoneyRounded'
import AlarmRounded from '@material-ui/icons/AlarmRounded'
import AccountBalanceRounded from '@material-ui/icons/AccountBalanceRounded'
import SettingsRounded from '@material-ui/icons/SettingsRounded'
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded'
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded'


const TopMenuItem: React.FC<Props> = (props) => {
	const { text, icon, handleCloseMenu } = props

	function handleClick() {
		history.push('all-' + icon)
		handleCloseMenu()
	}

	return (
		<div style={ containerStyle } onClick={ handleClick }>
			{ icons[icon] }
			<Typography style={ { ...fontStyle, textTransform: 'uppercase' } }>
				{ text }
			</Typography>
			<KeyboardArrowRightRounded style={ arrowStyle } />
		</div>
	)
}
export default TopMenuItem

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	padding: '15px 0px',
}
const fontStyle = {
	fontWeight: 600,
	fontSize: '14px',
	letterSpacing: '1px',
	textTransform: 'uppercase',
	marginLeft: '15px',
	marginRight: '15px',
}
const arrowStyle = {
	marginLeft: 'auto',
}
const iconStyle = {
	height: 'auto',
	width: '22px',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export type IconOptionsType =
	| 'home'
	| 'transaction'
	| 'reminder'
	| 'account'
	| 'settings'
	| 'logout'

interface OwnState {}

interface OwnProps {
	text: string
	icon: IconOptionsType
	handleCloseMenu: () => void
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState

const icons: any = {
	home: <HomeRounded style={ iconStyle } />,
	transaction: <AttachMoneyRounded style={ iconStyle } />,
	reminder: <AlarmRounded style={ iconStyle } />,
	account: <AccountBalanceRounded style={ iconStyle } />,
	settings: <SettingsRounded style={ iconStyle } />,
	logout: <ExitToAppRounded style={ iconStyle } />,
}
